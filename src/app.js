const express = require('express');
const app = express();
const models = require('./models/models');
models();

//Rotas
const funcionario = require('./routes/funcionario');

app.use(express.json());

// app.use(validToken);

app.use('/funcionario', funcionario);
// app.use('/auth', auth);
// app.use('/produtos', rotaProduto);
// app.use('/pessoas', rotaPessoas);


module.exports = app;