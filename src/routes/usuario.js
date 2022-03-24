const express = require('express');
const router = express.Router();
const { create } = require('../controllers/usuario');

router.post('/', create);

// router.post('', create);


module.exports = router;