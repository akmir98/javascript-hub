const Project = require('../models/projectModel');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Private
exports.getProjects = async (req, res) => {
  try {
    const filter = {};
    
    // If not admin, filter by user or public projects
    if (req.user.role !== 'admin') {
      filter.$or = [
        { user: req.user._id },
        { collaborators: req.user._id },
        { isPublic: true }
      ];
    }

    // Apply status filter if provided
    if (req.query.status) {
      filter.status = req.query.status;
    }

    // Apply type filter if provided
    if (req.query.type) {
      filter.type = req.query.type;
    }

    // Apply tag filter if provided
    if (req.query.tag) {
      filter.tags = req.query.tag;
    }

    const projects = await Project.find(filter)
      .sort({ lastModified: -1 })
      .populate('user', 'username')
      .populate('collaborators', 'username');
    
    res.json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get user's projects
// @route   GET /api/projects/my-projects
// @access  Private
exports.getMyProjects = async (req, res) => {
  try {
    const filter = {
      $or: [
        { user: req.user._id },
        { collaborators: req.user._id }
      ]
    };

    // Apply status filter if provided
    if (req.query.status) {
      filter.status = req.query.status;
    }

    const projects = await Project.find(filter)
      .sort({ lastModified: -1 })
      .populate('collaborators', 'username');
    
    res.json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get project by ID
// @route   GET /api/projects/:id
// @access  Private
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('user', 'username')
      .populate('collaborators', 'username');
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Check if user has access to this project
    const hasAccess = 
      project.isPublic || 
      project.user.equals(req.user._id) || 
      project.collaborators.some(collab => collab._id.equals(req.user._id)) ||
      req.user.role === 'admin';
    
    if (!hasAccess) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this project'
      });
    }

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private
exports.createProject = async (req, res) => {
  try {
    const { name, description, type, isPublic, tags, githubUrl, demoUrl } = req.body;

    const project = await Project.create({
      name,
      description: description || '',
      type: type || 'web',
      user: req.user._id,
      isPublic: isPublic || false,
      tags: tags || [],
      githubUrl,
      demoUrl
    });

    res.status(201).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error(error);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      
      res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Server error'
      });
    }
  }
};

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Check if user owns this project or is an admin
    if (!project.user.equals(req.user._id) && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this project'
      });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: updatedProject
    });
  } catch (error) {
    console.error(error);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      
      res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Server error'
      });
    }
  }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Check if user owns this project or is an admin
    if (!project.user.equals(req.user._id) && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this project'
      });
    }

    await Project.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Project removed'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Add a code snippet to a project
// @route   POST /api/projects/:id/code-snippets
// @access  Private
exports.addCodeSnippet = async (req, res) => {
  try {
    const { title, code, language } = req.body;

    if (!title || !code) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title and code'
      });
    }

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Check if user has permission (owner or collaborator)
    const hasPermission = 
      project.user.equals(req.user._id) || 
      project.collaborators.some(collab => collab.equals(req.user._id));
    
    if (!hasPermission) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to modify this project'
      });
    }

    // Add the code snippet
    project.codeSnippets.push({
      title,
      code,
      language: language || 'javascript'
    });

    // Update last modified date
    project.lastModified = Date.now();

    const updatedProject = await project.save();

    res.status(201).json({
      success: true,
      data: updatedProject.codeSnippets[updatedProject.codeSnippets.length - 1]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Add a collaborator to a project
// @route   POST /api/projects/:id/collaborators
// @access  Private
exports.addCollaborator = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a user ID'
      });
    }

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Check if user is the owner
    if (!project.user.equals(req.user._id)) {
      return res.status(403).json({
        success: false,
        message: 'Only the project owner can add collaborators'
      });
    }

    // Check if user is already a collaborator
    if (project.collaborators.some(collab => collab.equals(userId))) {
      return res.status(400).json({
        success: false,
        message: 'User is already a collaborator on this project'
      });
    }

    // Add the collaborator
    project.collaborators.push(userId);
    const updatedProject = await project.save();

    res.json({
      success: true,
      data: updatedProject
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Remove a collaborator from a project
// @route   DELETE /api/projects/:id/collaborators/:userId
// @access  Private
exports.removeCollaborator = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Check if user is the owner
    if (!project.user.equals(req.user._id)) {
      return res.status(403).json({
        success: false,
        message: 'Only the project owner can remove collaborators'
      });
    }

    // Remove the collaborator
    project.collaborators = project.collaborators.filter(
      collab => !collab.equals(req.params.userId)
    );
    
    const updatedProject = await project.save();

    res.json({
      success: true,
      data: updatedProject
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}; 