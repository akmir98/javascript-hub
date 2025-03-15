const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a resource title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a resource description']
  },
  url: {
    type: String,
    required: [true, 'Please provide a resource URL']
  },
  type: {
    type: String,
    enum: ['article', 'video', 'documentation', 'tool', 'book', 'course', 'other'],
    default: 'article'
  },
  category: {
    type: String,
    enum: ['javascript', 'frontend', 'backend', 'frameworks', 'libraries', 'testing', 'deployment', 'algorithms', 'other'],
    default: 'javascript'
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  tags: [String],
  imageUrl: {
    type: String
  },
  author: {
    type: String
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: {
    type: Number,
    default: 0
  },
  isApproved: {
    type: Boolean,
    default: true
  },
  featuredInLessons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  }]
}, {
  timestamps: true
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource; 