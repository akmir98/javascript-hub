const { Module, Lesson } = require('../models/curriculumModel');

// MODULE CONTROLLERS

// @desc    Get all modules
// @route   GET /api/curriculum/modules
// @access  Public
exports.getModules = async (req, res) => {
  try {
    const modules = await Module.find({})
      .sort({ weekNumber: 1 })
      .populate('primaryCharacter', 'name imageUrl role');
    
    res.json({
      success: true,
      count: modules.length,
      data: modules
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get module by ID
// @route   GET /api/curriculum/modules/:id
// @access  Public
exports.getModuleById = async (req, res) => {
  try {
    const module = await Module.findById(req.params.id)
      .populate('primaryCharacter', 'name imageUrl role specialty')
      .populate({
        path: 'lessons',
        options: { sort: { order: 1 } }
      });
    
    if (module) {
      res.json({
        success: true,
        data: module
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Module not found'
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

// @desc    Create a module
// @route   POST /api/curriculum/modules
// @access  Private/Admin
exports.createModule = async (req, res) => {
  try {
    const { title, description, weekNumber, imageUrl, primaryCharacter } = req.body;

    const moduleExists = await Module.findOne({ weekNumber });
    if (moduleExists) {
      return res.status(400).json({
        success: false,
        message: `A module for week ${weekNumber} already exists`
      });
    }

    const module = await Module.create({
      title,
      description,
      weekNumber,
      imageUrl,
      primaryCharacter
    });

    res.status(201).json({
      success: true,
      data: module
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

// @desc    Update a module
// @route   PUT /api/curriculum/modules/:id
// @access  Private/Admin
exports.updateModule = async (req, res) => {
  try {
    const module = await Module.findById(req.params.id);

    if (!module) {
      return res.status(404).json({
        success: false,
        message: 'Module not found'
      });
    }

    // If weekNumber is being updated, check for duplicates
    if (req.body.weekNumber && req.body.weekNumber !== module.weekNumber) {
      const moduleExists = await Module.findOne({ weekNumber: req.body.weekNumber });
      if (moduleExists) {
        return res.status(400).json({
          success: false,
          message: `A module for week ${req.body.weekNumber} already exists`
        });
      }
    }

    const updatedModule = await Module.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: updatedModule
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

// @desc    Delete a module
// @route   DELETE /api/curriculum/modules/:id
// @access  Private/Admin
exports.deleteModule = async (req, res) => {
  try {
    const module = await Module.findById(req.params.id);

    if (!module) {
      return res.status(404).json({
        success: false,
        message: 'Module not found'
      });
    }

    // Delete all associated lessons first
    await Lesson.deleteMany({ module: req.params.id });

    await Module.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Module and all associated lessons removed'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// LESSON CONTROLLERS

// @desc    Get all lessons
// @route   GET /api/curriculum/lessons
// @access  Public
exports.getLessons = async (req, res) => {
  try {
    const filter = {};
    // Filter by module if provided
    if (req.query.module) {
      filter.module = req.query.module;
    }

    // Filter by difficulty if provided
    if (req.query.difficulty) {
      filter.difficulty = req.query.difficulty;
    }

    const lessons = await Lesson.find(filter)
      .sort({ module: 1, order: 1 })
      .populate('module', 'title weekNumber')
      .populate('characters', 'name imageUrl');
    
    res.json({
      success: true,
      count: lessons.length,
      data: lessons
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get lesson by ID
// @route   GET /api/curriculum/lessons/:id
// @access  Public
exports.getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id)
      .populate('module', 'title weekNumber')
      .populate('characters', 'name imageUrl role specialty');
    
    if (lesson) {
      res.json({
        success: true,
        data: lesson
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Lesson not found'
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

// @desc    Create a lesson
// @route   POST /api/curriculum/lessons
// @access  Private/Admin
exports.createLesson = async (req, res) => {
  try {
    const {
      title,
      description,
      content,
      order,
      module,
      difficulty,
      duration,
      codeExamples,
      practiceExercises,
      resources,
      characters
    } = req.body;

    // Check if module exists
    const moduleExists = await Module.findById(module);
    if (!moduleExists) {
      return res.status(404).json({
        success: false,
        message: 'Module not found'
      });
    }

    // Check if there's already a lesson with the same order in this module
    const lessonExists = await Lesson.findOne({ module, order });
    if (lessonExists) {
      return res.status(400).json({
        success: false,
        message: `A lesson with order ${order} already exists in this module`
      });
    }

    const lesson = await Lesson.create({
      title,
      description,
      content,
      order,
      module,
      difficulty,
      duration,
      codeExamples: codeExamples || [],
      practiceExercises: practiceExercises || [],
      resources: resources || [],
      characters: characters || []
    });

    res.status(201).json({
      success: true,
      data: lesson
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

// @desc    Update a lesson
// @route   PUT /api/curriculum/lessons/:id
// @access  Private/Admin
exports.updateLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: 'Lesson not found'
      });
    }

    // If order or module is being updated, check for duplicates
    if ((req.body.order || req.body.module) && 
        (req.body.order !== lesson.order || req.body.module !== lesson.module.toString())) {
      const targetModule = req.body.module || lesson.module;
      const targetOrder = req.body.order || lesson.order;
      
      const lessonExists = await Lesson.findOne({ 
        module: targetModule, 
        order: targetOrder,
        _id: { $ne: req.params.id }
      });
      
      if (lessonExists) {
        return res.status(400).json({
          success: false,
          message: `A lesson with order ${targetOrder} already exists in this module`
        });
      }
    }

    const updatedLesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: updatedLesson
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

// @desc    Delete a lesson
// @route   DELETE /api/curriculum/lessons/:id
// @access  Private/Admin
exports.deleteLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: 'Lesson not found'
      });
    }

    await Lesson.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Lesson removed'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}; 