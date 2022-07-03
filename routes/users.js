const express = require('express');
const router = express.Router();

// This for the login page
router.get('/login', (req, res) => res.send('Login'));

// This is for the registration page
router.get('/register', (req, res) => res.send('Register'));


module.exports = router;