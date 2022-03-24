const express = require('express');
const app = express();
const models = require('./models/models');
models();

//Rotas
const usuario = require('./routes/usuario');

app.use(express.json());

// app.use(validToken);

app.use('/usuario', usuario);
// app.use('/auth', auth);
// app.use('/produtos', rotaProduto);
// app.use('/pessoas', rotaPessoas);


module.exports = app;