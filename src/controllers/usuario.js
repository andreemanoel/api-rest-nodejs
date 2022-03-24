const Usuario  = require('../models/usuario');

const create =  async (req, res, next) => {
    let { body } = req;

    try{

        let usuario = await Usuario.create({
            nome: body.nome,
        });
        
        let usuarios = await Usuario.findAll();
        
        res.status(200).send(usuarios);
    }catch(err){
        res.status(500).send(err.message);
    }
}

module.exports = {create};