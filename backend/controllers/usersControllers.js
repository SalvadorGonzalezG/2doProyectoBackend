const jwt = require('jsonwebtoken') // Generar nuestros tokens
const bcrypt = require('bcryptjs') // Generar los Hashe´s
const asyncHandler = require('express-async-handler') // poder manejar las excepciones que encontremos en funciones asyncronas
const User = require('../models/userModel') //mandamos llamar nuestro modelo ya que mongoose lo usamos en el modelo.


// Registrar un usuario nuevo.
const registrarUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body //desestructurar el contenido de req body
    if(!name || !email || !password){
        res.status(400) //Bad reques
        throw new Error('faltan Datos favor de verificarlo')
    }
    // Verificamos si el Usuario existe.
    const userExist = await User.findOne({ email })
    if(userExist){
        res.status(400)
        throw new Error ('Ese usuario ya existe en la base de datos.')
    }else {
        // Hass Password
        const salt = await bcrypt.genSalt(10) // Crear la sal esperando la promesa y con un metodo de bcrypt
        const hashedPassword = await bcrypt.hash(password, salt) //generar el pasword con el metodo hash 2 parametros 1 texto de entrada y el segundo la salt

        // Crear el usuario.
        const user = await User.create({    // una promesa
            name: name, // nombre del campo en mi modelo. name nombre del campo y : name nombre del dato desestructurado.
            email,
            password: hashedPassword
        })
        // Checamos si se pudo creear el usuario.
        if(user){ // si se creo el usuario
            res.status(201).json({             
                _id: user._id,  // colocar en json los datos del usuario
                name: user.name,
                email: user.email,
                admin: user.esAdmin
            })
        } else {
            res.status(400)
            throw new Error ("no se pudo guardar el usuario.")
        }
    }
})

//Hacer Login.
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body // desestructurando de req.body

    if(!email || !password){ // preguntamos si estan pasando email y password, de lo contrario
        res.status(400)
        throw new Error(" Falta ingresar datos.") //mandar un error.
    }

    // verificar si el usuario existe
    const user = await User.findOne({ email })// espera la promesa await y del modelo User usaremos el modelo findOe pasando como parametro el email.
    if(user && (await bcrypt.compare(password, user.password))) { // preguntamos si el usuario existe y ademas la promesa de la comparacion del pasword, comparamos el pasword y el hash 
    // devuelva un 200 y devulva un objeto json con los datos del usuario.
    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        admin: user.esAdmin,
        token: generatetoken(user._id)
    })
    }else{
        res.status(400)
        throw new Error("Credenciales incorrectas, compruba que los datos ingresados sean correctos")
    }
})

//Mostrar los datos del usuario.
const datosUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})
        //GENERAMOS EL JSON WEB TOKEN.
const generatetoken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

}

module.exports = {
    registrarUser,
    loginUser,
    datosUser
}