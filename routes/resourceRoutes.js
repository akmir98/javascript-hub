const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const {
  getResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
  likeResource,
  approveResource
} = require('../controllers/resourceController');

// Public routes
router.get('/', getResources);
router.get('/:id', getResourceById);

// Protected routes
router.post('/', protect, createResource);
router.put('/:id', protect, updateResource);
router.delete('/:id', protect, deleteResource);
router.put('/:id/like', protect, likeResource);

// Admin routes
router.put('/:id/approve', protect, admin, approveResource);

module.exports = router; 