const jwt = require('jsonwebtoken');
// const { user } = require('pg/lib/defaults');
const Usuario = require('../models/usuario');

const validToken = async (req, res, next) => {
    
    try {
        const [, token] = req.headers.authorization.split(' ');
        
        if(!token) {
            return res.status(401).json({message: 'Unauthorized'});
        }

        const payload = await jwt.verify(token, process.env.SECRET_JWT);
        const user = await Usuario.findOne({where: {id: payload.userId}});

        if(!user){
            return res.status(401).json({message: 'Unauthorized'});
        }

        req.auth = user;
        next();
    } catch (e) {
        
        return res.status(401).json({message: 'Unauthorized'});
    }
};

module.exports = { validToken }