const express = require('express')
const dotenv = require('dotenv').config()//llamar (acceder) a las variables de entorno

const port = process.env.PORT || 5000 // puerto para la app MOSTRANDOLE COMO TIENES ACCESOA LAS VARIABLES DE ENTORNO Y EN CASO DE QUE NO LO ENCUENTRE QUE EJECUTE EL PUERTO 5000

const app = express()// Crear una constante que se llame app para decir que es una aplicacion de express.

app.use('/api/tareas',require('./routes/tareasRoutes'))

app.listen(port, ()=> console.log(`servidor iniciado en el puerto ${port}`) ) //hacer que nuestra app este escuchando en el puerto 5000