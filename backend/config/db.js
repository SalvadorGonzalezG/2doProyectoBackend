    // vamor a empezar a decir a la base de datos que nos conectaremos a la base de datos de mongo con mongoose
    //mongoose es uana herramienta de modelado de objetos para que una applicacion se conete a una base de datos de mongo

    const mongoose = require('mongoose')
        // crear funcion para conecta a la base de datos
        const conectDB = async () => { // funcion asincrona ya que tenemos que esperar a que se conecte.
            try {       //TODA FUNCION ASINCRONA LLEVA UN AWAIT
                const conn = await mongoose.connect(process.env.MONGO_URI) //CADENA DE CONEXIÓN acceder atravez del process
                console.log(`MONGO_BD CONECTED: ${conn.connection.host}`.yellow.underline) //una vez que ya se conecto
            } catch (error) {
                console.log(error) //si hay un error quer lo cache y me mande el error
                process.exit(1)    //en caso de que no se pueda conectar termina la ejecucion
            }
        }
        module.exports = conectDB //exportacion.