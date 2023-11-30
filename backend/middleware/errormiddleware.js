        // vamos a cachar los errores quer lancemos que mande un status y un msj crearemos un manejador de errores.
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500 //cachar el status que le mande
    res.status(statusCode) //
    res.json({ //mandar un mensaje
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // nueva propiedad en un objeto
    })
}

module.exports = {
    errorHandler
}