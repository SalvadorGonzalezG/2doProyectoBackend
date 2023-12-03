// Registrar un usuario nuevo.
const registrarUser = (req, res) => {
res.status(201).json({ message: 'Usuario Creado'})
}
//Hacer Login.
const loginUser = (req, res) => {
    res.status(201).json({ message: 'Login User'})
}
//Mostrar los datos del usuario.
const datosUser = (req, res) => {
    res.status(201).json({ message: 'Datos de User'})
}

module.exports = {
    registrarUser,
    loginUser,
    datosUser
}