const express = require('express');
const app = express();
const models = require('./models/models');
models();

const funcionario = require('./routes/funcionario');

app.use(express.json());

app.use('/funcionario', funcionario);

module.exports = app;