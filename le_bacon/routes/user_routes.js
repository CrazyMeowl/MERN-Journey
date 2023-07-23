const express = require('express')
const router = express.Router()

// controller fuction
const { signInUser,signUpUser } = require('../controllers/user_controller')

// sign in route
router.post('/signin', signInUser)

// sign up route
router.post('/signup', signUpUser)

// sign out route
router.post('/signout', () => {})

module.exports = router