const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a character name'],
    trim: true
  },
  role: {
    type: String,
    required: [true, 'Please provide a character role'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a character description']
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL']
  },
  specialty: {
    type: String,
    required: [true, 'Please provide a specialty']
  },
  teachingLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  quote: {
    type: String
  },
  skills: [String],
  featuredInLessons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  }]
}, {
  timestamps: true
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character; 