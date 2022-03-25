const express = require('express');
const router = express.Router();
const { create, all } = require('../controllers/usuario');

router.post('/', create);
router.get('/', all);

// router.post('', create);


module.exports = router;