const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a project name'],
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    enum: ['web', 'game', 'tool', 'api', 'other'],
    default: 'web'
  },
  codeSnippets: [{
    title: String,
    code: String,
    language: {
      type: String,
      default: 'javascript'
    }
  }],
  status: {
    type: String,
    enum: ['in-progress', 'completed', 'archived'],
    default: 'in-progress'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  collaborators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  isPublic: {
    type: Boolean,
    default: false
  },
  tags: [String],
  githubUrl: {
    type: String
  },
  demoUrl: {
    type: String
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Update lastModified whenever the project is updated
projectSchema.pre('save', function(next) {
  this.lastModified = Date.now();
  next();
});

// Add index for better search performance
projectSchema.index({ name: 'text', description: 'text', tags: 1 });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project; 