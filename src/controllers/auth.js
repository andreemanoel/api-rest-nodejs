const Usuario  = require('../models/usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users =  async (req, res, next) => {  
    try{
        let usuarios = await Usuario.findAll();
        
        res.status(200).send({data: usuarios});
    }catch(err){
        res.status(500).send(err.message);
    }
}

const create =  async (req, res, next) => {
    let { body } = req;
    console.log('Aqui')    
    try{
        const alreadyExistsUser = await Usuario.findOne({where: {email: body.email}});

        if(alreadyExistsUser){
            return res.status(401).json({message: 'Usuário já cadastrado com esse email.'});
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(body.password, salt);
        
        let usuario = await Usuario.create({
            nome: body.nome,
            email: body.email,
            password: hash
        });
        
        let usuarios = await Usuario.findAll();
        
        res.status(200).send({data: usuarios});
    }catch(err){
        res.status(500).send(err.message);
    }
}

const update =  async (req, res, next) => {
    let { body } = req;

    try{
        const alreadyExistsUser = await Usuario.findOne({where: {id: req.params.id}});

        if(!alreadyExistsUser){
            return res.status(404).json({message: 'Usuário não cadastrado.'});
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(body.password, salt);
        
        let usuario = await alreadyExistsUser.update({
            nome: body.nome,
            email: body.email,
            password: hash
        });
        
        let usuarios = await Usuario.findAll();
        
        res.status(200).send(usuarios);
    }catch(err){
        res.status(500).send(err.message);
    }
}

const destroy =  async (req, res, next) => {
    try{
        const alreadyExistsUser = await Usuario.findOne({where: {id: req.params.id}});

        if(!alreadyExistsUser){
            return res.status(404).json({message: 'Usuário não cadastrado.'});
        }
        
        await alreadyExistsUser.destroy();
        
        res.status(200).send({message: "Usuario deletado com sucesso! "});
    }catch(err){
        res.status(500).send(err.message);
    }
}

const login =  async (req, res, next) => {
    console.log(process.env.SECRET_JWT);

    let { body } = req;

    const email = body.email;
    const password = body.password;

    if(!email || !password){
        return res.status(401).json({message: 'Dados insuficientes!'});
    }

    const userFind = await Usuario.findOne({where: {email: email}});

    if(!userFind){
       return res.status(401).json({message: 'Login inválido!'});
    }

    if(!bcrypt.compareSync(password, userFind.password)){
        return res.status(401).json({message: 'Login inválido!'});
    }
    const token = jwt.sign({ userId: userFind.id }, process.env.SECRET_JWT, {
        expiresIn: 3000
    });

    return res.status(200).json({ auth: true, token: token });
}

const logado = (req, res) => {
    res.send(req.auth);
}

const logout = (req, res) => {
    return res.json({ auth: false, token: null });
}

module.exports = {login, create, logado, logout, update, destroy, users};