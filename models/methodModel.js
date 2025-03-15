const mongoose = require('mongoose');

const methodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a method name'],
    trim: true,
    unique: true
  },
  category: {
    type: String,
    enum: ['array', 'string', 'number', 'object', 'date', 'math', 'promise', 'dom', 'other'],
    required: [true, 'Please provide a method category']
  },
  description: {
    type: String,
    required: [true, 'Please provide a method description']
  },
  syntax: {
    type: String,
    required: [true, 'Please provide method syntax']
  },
  parameters: [{
    name: String,
    type: String,
    description: String,
    isOptional: {
      type: Boolean,
      default: false
    }
  }],
  returnValue: {
    type: String
  },
  examples: [{
    code: String,
    explanation: String
  }],
  compatibility: {
    type: String,
    default: 'ES6+'
  },
  relatedMethods: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Method'
  }],
  difficultyLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  featuredInLessons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  }]
}, {
  timestamps: true
});

const Method = mongoose.model('Method', methodSchema);

module.exports = Method; 