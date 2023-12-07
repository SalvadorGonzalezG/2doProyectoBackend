const mongoose = require('mongoose')

const userSchema = mongoose.Schema({ //metodo llamado schema 
    name: {
        type: String,
        required: [ true, "porfavor teclea tu nombre"]
    },
    email: {
        type: String,
        required: [ true, "Por Favor Teclea tu email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "por favor teclea tu password"]
    },
    esAdmin: {
        type: Boolean,
        default: false
}
},{
    timestamps: true // mongo cada vez que insertemos un registro va a insertar un UU ID unico y que no se repite: created ADD. updateADD coloca fecha y hora cada vez que se actualice.
}) 
module.exports = mongoose.model("User", userSchema) //mongosse crea la coleccion que se llama tareas en minuscolas, en plural. 
// nombrar al modelo en singular.