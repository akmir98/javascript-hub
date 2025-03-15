const mongoose = require('mongoose');

// Lesson schema
const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a lesson title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a lesson description']
  },
  content: {
    type: String,
    required: [true, 'Please provide lesson content']
  },
  order: {
    type: Number,
    required: [true, 'Please provide lesson order']
  },
  module: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module',
    required: true
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  duration: {
    type: Number, // duration in minutes
    default: 15
  },
  codeExamples: [{
    title: String,
    code: String,
    explanation: String
  }],
  practiceExercises: [{
    question: String,
    startingCode: String,
    solutionCode: String,
    hints: [String],
    testCases: [{
      input: String,
      expectedOutput: String
    }]
  }],
  resources: [{
    title: String,
    url: String,
    type: {
      type: String,
      enum: ['article', 'video', 'documentation', 'tool']
    }
  }],
  characters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character'
  }]
}, {
  timestamps: true
});

// Module schema
const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a module title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a module description']
  },
  weekNumber: {
    type: Number,
    required: [true, 'Please provide a week number'],
    unique: true
  },
  imageUrl: {
    type: String
  },
  primaryCharacter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for populating lessons
moduleSchema.virtual('lessons', {
  ref: 'Lesson',
  localField: '_id',
  foreignField: 'module',
  options: { sort: { order: 1 } }
});

const Lesson = mongoose.model('Lesson', lessonSchema);
const Module = mongoose.model('Module', moduleSchema);

module.exports = {
  Lesson,
  Module
}; 