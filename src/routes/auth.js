const express = require('express');
const router = express.Router();
const { login, create, logado, logout, update, destroy, users } = require('../controllers/auth');
const {validToken} = require('../middleware/login');


router.post('/login', login);
router.post('/user', create);
router.get('/users', users);
router.put('/user/:id', update);
router.delete('/user/:id', validToken, destroy);
router.get('/logout' , validToken, logout);
router.get('/me', validToken, logado);

module.exports = router;