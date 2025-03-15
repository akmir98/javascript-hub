const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const projectController = require('../controllers/projectController');

// Apply protect middleware to all routes
router.use(protect);

// Main project routes
router.route('/')
  .get(projectController.getProjects)
  .post(projectController.createProject);

router.get('/my-projects', projectController.getMyProjects);

router.route('/:id')
  .get(projectController.getProjectById)
  .put(projectController.updateProject)
  .delete(projectController.deleteProject);

// Code snippets routes
router.post('/:id/code-snippets', projectController.addCodeSnippet);

// Collaborator routes
router.post('/:id/collaborators', projectController.addCollaborator);
router.delete('/:id/collaborators/:userId', projectController.removeCollaborator);

module.exports = router; 