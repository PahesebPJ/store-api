const router = require('express').Router();

const login = require('../controllers/login.controller');

router.post('/login',login.loginUser);

module.exports = router;