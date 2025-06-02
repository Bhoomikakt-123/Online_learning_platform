const express = require('express');
const router = express.Router();
const {
  getCourses,
  getCourseById,
  createCourse,
  enrollCourse
} = require('../controllers/courseController');

// GET all courses
router.get('/', getCourses);

// GET single course
router.get('/:id', getCourseById);

// POST create new course (protected)
router.post('/', createCourse);

// POST enroll in course (protected)
router.post('/:id/enroll', enrollCourse);

module.exports = router;