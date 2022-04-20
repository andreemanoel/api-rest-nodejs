const express = require('express');
const router = express.Router();
const { create, update, all, destroy, funcionario } = require('../controllers/funcionario');
const {validToken} = require('../middleware/login');

router.post('/', validToken, create);
router.put('/:id', validToken, update);
router.delete('/:id', validToken, destroy);
router.get('/', validToken, all);
router.get('/:id', validToken, funcionario);

// router.post('', create);


module.exports = router;