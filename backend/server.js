const express = require('express')
const dotenv = require('dotenv').config()//llamar (acceder) a las variables de entorno
const { errorHandler } = require ('./middleware/errormiddleware')

const port = process.env.PORT || 5000 // puerto para la app MOSTRANDOLE COMO TIENES ACCESOA LAS VARIABLES DE ENTORNO Y EN CASO DE QUE NO LO ENCUENTRE QUE EJECUTE EL PUERTO 5000

const app = express()// Crear una constante que se llame app para decir que es una aplicacion de express.

app.use(express.json()) // mi app va a usar json.
app.use(express.urlencoded({ extends: false })) // de exprees tambien usare el metodo urlencode y si voy a usar un body parsel

app.use('/api/tareas',require('./routes/tareasRoutes')) // cuando alguien ponga /api tareas mande llamar el require
app.use(errorHandler)

app.listen(port, ()=> console.log(`servidor iniciado en el puerto ${port}`) ) //hacer que nuestra app este escuchando en el puerto 5000