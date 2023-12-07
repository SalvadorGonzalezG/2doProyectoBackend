// PROTEGER LOS END POINTS
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')    //modelo de los usuarios
// funcion protectora va a leer un token y verificara que la firma sea correcta
const protect = asyncHandler(async(req, res, next)=>{
    let token // Definir el con
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // obtenemos el token
            token = req.headers.authorization.split(' ')[1]

            // Verificamos la firma del token.
            const decoded = jwt.verify(token, process.env.JWT_SECRET) //Metodo de jwt

            // Obtenemos los datos del usuario.
            req.user = await User.findById(decoded.id).select('-password') // en req User apareceran todos los datos del usuario menos el password.

            next() // continua con la ejecucion de mi programa.
        
        } catch (error) { // y si hay un error con el token que lo muestre.
            console.log(error)
            res.status(401)
            throw new Error('Acceso no autorizado')
        }
    }
    if(!token){ // si el usuario no paso un token.
        res.status(401)
        throw new Error('Acceso no autorizado, no se proporcionó ningun token') 
    }
})
module.exports = { protect }
