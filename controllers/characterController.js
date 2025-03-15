const Character = require('../models/characterModel');

// @desc    Get all characters
// @route   GET /api/characters
// @access  Public
exports.getCharacters = async (req, res) => {
  try {
    const characters = await Character.find({}).populate('featuredInLessons', 'title');
    
    res.json({
      success: true,
      count: characters.length,
      data: characters
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get character by ID
// @route   GET /api/characters/:id
// @access  Public
exports.getCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id).populate('featuredInLessons', 'title description module');
    
    if (character) {
      res.json({
        success: true,
        data: character
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Character not found'
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

// @desc    Create a character
// @route   POST /api/characters
// @access  Private/Admin
exports.createCharacter = async (req, res) => {
  try {
    const {
      name,
      role,
      description,
      imageUrl,
      specialty,
      teachingLevel,
      quote,
      skills
    } = req.body;

    const character = await Character.create({
      name,
      role,
      description,
      imageUrl,
      specialty,
      teachingLevel,
      quote,
      skills: skills || []
    });

    res.status(201).json({
      success: true,
      data: character
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

// @desc    Update a character
// @route   PUT /api/characters/:id
// @access  Private/Admin
exports.updateCharacter = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);

    if (!character) {
      return res.status(404).json({
        success: false,
        message: 'Character not found'
      });
    }

    const updatedCharacter = await Character.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: updatedCharacter
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

// @desc    Delete a character
// @route   DELETE /api/characters/:id
// @access  Private/Admin
exports.deleteCharacter = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);

    if (!character) {
      return res.status(404).json({
        success: false,
        message: 'Character not found'
      });
    }

    await Character.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Character removed'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}; 