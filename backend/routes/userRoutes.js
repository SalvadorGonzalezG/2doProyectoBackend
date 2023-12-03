const express = require('express')
const router = express.Router() 
const { registrarUser, loginUser, datosUser } = require('../controllers/usersControllers') //datos desde User Controller

router.post('/', registrarUser)
router.post('/login', loginUser)
router.get('/datos', datosUser)
module.exports = router