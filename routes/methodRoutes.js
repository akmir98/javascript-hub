const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const {
  getMethods,
  getMethodById,
  createMethod,
  updateMethod,
  deleteMethod
} = require('../controllers/methodController');

// Public routes
router.get('/', getMethods);
router.get('/:id', getMethodById);

// Admin routes
router.post('/', protect, admin, createMethod);
router.put('/:id', protect, admin, updateMethod);
router.delete('/:id', protect, admin, deleteMethod);

module.exports = router; 