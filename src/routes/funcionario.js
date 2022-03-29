const express = require('express');
const router = express.Router();
const { create, update, all, destroy, funcionario } = require('../controllers/funcionario');

router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);
router.get('/', all);
router.get('/:id', funcionario);

// router.post('', create);


module.exports = router;