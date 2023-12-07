const express = require('express')
const router = express.Router() 
const { registrarUser, loginUser, datosUser } = require('../controllers/usersControllers') //datos desde User Controller
        // Importamos la funcion protectora de authmiddleware.
const { protect } = require('../middleware/authmiddleware')

router.post('/', registrarUser)
router.post('/login', loginUser)
router.get('/datos', protect, datosUser) // ruta protegida 
module.exports = router