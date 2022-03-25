const Funcionario  = require('../models/funcionario');

const Contato = require('../models/contato');

const create =  async (req, res, next) => {
    let { body } = req;

    try{

        let contato = await Contato.create({
            email: body.email,
            telefone: body.telefone,
        });
        if(contato) {
            let funcionario = await Funcionario.create({
                nome: body.nome,
                data_nascimento: body.data_nascimento,
                status: body.status,
                contato_id: contato.id
            });
        }
        
        let funcionarios = await Funcionario.findAll({include: Contato});
        
        res.status(200).send(funcionarios);
    }catch(err){
        res.status(500).send(err.message);
    }
}

const all =  async (req, res, next) => {
    try{  
        let funcionarios = await Funcionario.findAll({include: Contato});
        
        res.status(200).send(funcionarios);
    }catch(err){
        res.status(500).send(err.message);
    }
}

module.exports = {create, all};