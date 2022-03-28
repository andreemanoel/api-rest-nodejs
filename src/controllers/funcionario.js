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

const update =  async (req, res, next) => {
    let { body } = req;
    try{
        const alreadyExistsFunc = await Funcionario.findOne({where: {id: req.params.id}});

        console.log(alreadyExistsFunc);
        if(!alreadyExistsFunc){
            return res.status(404).json({message: 'Funcionário não cadastrado.'});
        }
        
        let funcionario = await alreadyExistsFunc.update({
            nome: body.nome,
            data_nascimento: body.data_nascimento,
            status: body.status
        });
        if(funcionario){

            const contatoFind = await Contato.findOne({where: {id: funcionario.id}});

            let contato = await contatoFind.update({
                email: body.email,
                telefone: body.telefone,
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
        let funcionarios = await Funcionario.findAll({include: Contato, order: [["id", "ASC"]]});
        
        res.status(200).send(funcionarios);
    }catch(err){
        res.status(500).send(err.message);
    }
}

const destroy =  async (req, res, next) => {
    try{
        const alreadyExistsFunc = await Funcionario.findOne({where: {id: req.params.id}});

        if(!alreadyExistsFunc){
            
            return res.status(404).json({message: 'Funcionário não cadastrado.'});
        }
        
        let funcionario = await alreadyExistsFunc.destroy();

        if(funcionario){

            const contatoFind = await Contato.findOne({where: {id: alreadyExistsFunc.id}});

            let contato = await contatoFind.destroy();
        }
        
        let funcionarios = await Funcionario.findAll({include: Contato});
        
        res.status(200).send(funcionarios);
    }catch(err){
        res.status(500).send(err.message);
    }
}

module.exports = {create, update, all, destroy};