const express = require('express');
const {
  getModules,
  getModuleById,
  createModule,
  updateModule,
  deleteModule,
  getLessons,
  getLessonById,
  createLesson,
  updateLesson,
  deleteLesson
} = require('../controllers/curriculumController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Module routes
router.route('/modules')
  .get(getModules)
  .post(protect, admin, createModule);

router.route('/modules/:id')
  .get(getModuleById)
  .put(protect, admin, updateModule)
  .delete(protect, admin, deleteModule);

// Lesson routes
router.route('/lessons')
  .get(getLessons)
  .post(protect, admin, createLesson);

router.route('/lessons/:id')
  .get(getLessonById)
  .put(protect, admin, updateLesson)
  .delete(protect, admin, deleteLesson);

module.exports = router; 