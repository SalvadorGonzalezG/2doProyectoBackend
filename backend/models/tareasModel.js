            //modelo de la coleccion tareas
const mongoose = require('mongoose') //paquete que se encarga de comunicarse con mongo

const tareasSchema = mongoose.Schema({ //metono schema funcion
    // campos que tendra nuestra coleccion.
    texto: {  //objeto que tendra varias propiedades
        type: String, //tipo de dato. "Cadena."
        required: [true, 'porFavor teclea el texto de la tarea'] // campo requerido y en caso de que no lo tecle mande el msj debido al manejador de errores.
    }
},{
   timestamps: true // mongo cada vez que insertemos un registro va a insertar un UU ID unico y que no se repite: created ADD. updateADD coloca fecha y hora cada vez que se actualice.
})
// Exportacion
module.exports = mongoose.model('Tarea', tareasSchema) //mongosse crea la coleccion que se llama tareas en minuscolas, en plural. 
// nombrar al modelo en singular.