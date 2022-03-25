const express = require('express');
const router = express.Router();
const { create, all } = require('../controllers/funcionario');

router.post('/', create);
router.get('/', all);

// router.post('', create);


module.exports = router;