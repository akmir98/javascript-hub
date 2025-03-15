const Resource = require('../models/resourceModel');

// @desc    Get all resources
// @route   GET /api/resources
// @access  Public
exports.getResources = async (req, res) => {
  try {
    const filter = { isApproved: true };
    
    // Apply category filter if provided
    if (req.query.category) {
      filter.category = req.query.category;
    }
    
    // Apply type filter if provided
    if (req.query.type) {
      filter.type = req.query.type;
    }
    
    // Apply difficulty filter if provided
    if (req.query.difficulty) {
      filter.difficulty = req.query.difficulty;
    }
    
    // Apply tag filter if provided
    if (req.query.tag) {
      filter.tags = req.query.tag;
    }
    
    const resources = await Resource.find(filter)
      .sort({ likes: -1, createdAt: -1 })
      .populate('submittedBy', 'username');
    
    res.json({
      success: true,
      count: resources.length,
      data: resources
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get resource by ID
// @route   GET /api/resources/:id
// @access  Public
exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id)
      .populate('submittedBy', 'username')
      .populate('featuredInLessons', 'title');
    
    if (resource) {
      res.json({
        success: true,
        data: resource
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Resource not found'
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Create a resource
// @route   POST /api/resources
// @access  Private
exports.createResource = async (req, res) => {
  try {
    const {
      title,
      description,
      url,
      type,
      category,
      difficulty,
      tags,
      imageUrl,
      author
    } = req.body;

    // Check if resource with same URL already exists
    const resourceExists = await Resource.findOne({ url });
    if (resourceExists) {
      return res.status(400).json({
        success: false,
        message: 'A resource with this URL already exists'
      });
    }

    // If user is not admin, set isApproved to false
    const isApproved = req.user.role === 'admin';

    const resource = await Resource.create({
      title,
      description,
      url,
      type: type || 'article',
      category: category || 'javascript',
      difficulty: difficulty || 'beginner',
      tags: tags || [],
      imageUrl,
      author,
      submittedBy: req.user._id,
      isApproved
    });

    res.status(201).json({
      success: true,
      data: resource
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

// @desc    Update a resource
// @route   PUT /api/resources/:id
// @access  Private/Admin
exports.updateResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      return res.status(404).json({
        success: false,
        message: 'Resource not found'
      });
    }

    // Only admin or the user who submitted can update
    if (
      req.user.role !== 'admin' && 
      !resource.submittedBy.equals(req.user._id)
    ) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this resource'
      });
    }

    const updatedResource = await Resource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: updatedResource
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

// @desc    Delete a resource
// @route   DELETE /api/resources/:id
// @access  Private/Admin
exports.deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      return res.status(404).json({
        success: false,
        message: 'Resource not found'
      });
    }

    // Only admin or the user who submitted can delete
    if (
      req.user.role !== 'admin' && 
      !resource.submittedBy.equals(req.user._id)
    ) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this resource'
      });
    }

    await Resource.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Resource removed'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Like a resource
// @route   PUT /api/resources/:id/like
// @access  Private
exports.likeResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      return res.status(404).json({
        success: false,
        message: 'Resource not found'
      });
    }

    // Increment likes
    resource.likes += 1;
    await resource.save();

    res.json({
      success: true,
      data: {
        likes: resource.likes
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Approve a resource (admin only)
// @route   PUT /api/resources/:id/approve
// @access  Private/Admin
exports.approveResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      return res.status(404).json({
        success: false,
        message: 'Resource not found'
      });
    }

    resource.isApproved = true;
    await resource.save();

    res.json({
      success: true,
      data: resource
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}; 