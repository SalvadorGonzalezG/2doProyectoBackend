        // Un middleware es un programa que actua de puente entre dos secciones del codigo
        // vamos a cachar los errores quer lancemos que mande un status y un msj crearemos un manejador de errores.
const errorHandler = (err, req, res, next) => { // manejador de errores.
    const statusCode = res.statusCode ? res.statusCode : 500 //cachar el status que le mande si existe y si no existe que coloque un 500
    res.status(statusCode) //sobre escribir el error
    res.json({ //mandar un mensaje
        message: err.message, // err.message = throw new Error que se encuentra en tareasController
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // nueva propiedad en un objeto. preguntamos para que no aparesca en produccion unicamente en desarrollo
    })
}

module.exports = { //exportamos la funcion. y la importamos en server.js
    errorHandler
}