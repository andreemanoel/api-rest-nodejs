const express = require('express');
var cors = require('cors')
const app = express();
const models = require('./models/models');
models();

const funcionario = require('./routes/funcionario');

app.use(cors());

app.use(express.json());

app.use('/funcionario', funcionario);

module.exports = app;