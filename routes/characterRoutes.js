const express = require('express');
const {
  getCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter
} = require('../controllers/characterController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getCharacters);
router.get('/:id', getCharacterById);

// Admin routes
router.post('/', protect, admin, createCharacter);
router.put('/:id', protect, admin, updateCharacter);
router.delete('/:id', protect, admin, deleteCharacter);

module.exports = router; 