const Method = require('../models/methodModel');

// @desc    Get all methods
// @route   GET /api/methods
// @access  Public
exports.getMethods = async (req, res) => {
  try {
    const filter = {};
    
    // Apply category filter if provided
    if (req.query.category) {
      filter.category = req.query.category;
    }
    
    // Apply difficulty filter if provided
    if (req.query.difficultyLevel) {
      filter.difficultyLevel = req.query.difficultyLevel;
    }
    
    const methods = await Method.find(filter)
      .sort({ category: 1, name: 1 })
      .populate('relatedMethods', 'name category');
    
    res.json({
      success: true,
      count: methods.length,
      data: methods
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get method by ID
// @route   GET /api/methods/:id
// @access  Public
exports.getMethodById = async (req, res) => {
  try {
    const method = await Method.findById(req.params.id)
      .populate('relatedMethods', 'name category description')
      .populate('featuredInLessons', 'title module');
    
    if (method) {
      res.json({
        success: true,
        data: method
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Method not found'
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

// @desc    Create a method
// @route   POST /api/methods
// @access  Private/Admin
exports.createMethod = async (req, res) => {
  try {
    const {
      name,
      category,
      description,
      syntax,
      parameters,
      returnValue,
      examples,
      compatibility,
      difficultyLevel,
      relatedMethods
    } = req.body;

    // Check if method with same name already exists
    const methodExists = await Method.findOne({ name });
    if (methodExists) {
      return res.status(400).json({
        success: false,
        message: 'A method with this name already exists'
      });
    }

    const method = await Method.create({
      name,
      category,
      description,
      syntax,
      parameters: parameters || [],
      returnValue,
      examples: examples || [],
      compatibility: compatibility || 'ES6+',
      difficultyLevel: difficultyLevel || 'beginner',
      relatedMethods: relatedMethods || []
    });

    res.status(201).json({
      success: true,
      data: method
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

// @desc    Update a method
// @route   PUT /api/methods/:id
// @access  Private/Admin
exports.updateMethod = async (req, res) => {
  try {
    const method = await Method.findById(req.params.id);

    if (!method) {
      return res.status(404).json({
        success: false,
        message: 'Method not found'
      });
    }

    const updatedMethod = await Method.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: updatedMethod
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

// @desc    Delete a method
// @route   DELETE /api/methods/:id
// @access  Private/Admin
exports.deleteMethod = async (req, res) => {
  try {
    const method = await Method.findById(req.params.id);

    if (!method) {
      return res.status(404).json({
        success: false,
        message: 'Method not found'
      });
    }

    await Method.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Method removed'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}; 