

const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  registerAdmin
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/admin/register', registerAdmin);

router.get('/me', protect, getMe)

module.exports = router