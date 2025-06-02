const express = require('express');
const { getMe, updateProfile } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/me', protect, getMe);
router.put('/me', protect, updateProfile);

module.exports = router;