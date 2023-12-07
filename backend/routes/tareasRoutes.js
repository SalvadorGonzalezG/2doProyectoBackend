const express = require('express') //
const router = express.Router() //metodo
const { getTareas, createTarea, updateTarea, deleteTarea } = require('../controllers/tareasController')
            // FUNCION PROTECTORA HECHA EN EL authmiddleware.js.
const { protect } = require('../middleware/authmiddleware')
            // Obtener Tarea
router.get('/', protect, getTareas)// end point 2 
            //Crear una Tarea
router.post('/', protect, createTarea)//metodo post end point
            //Modificar una tarea.
router.put('/:id', protect, updateTarea)
            //Eliminar una tarea.
router.delete('/:id', protect, deleteTarea)// metodo delete, end point

module.exports = router // exportación del router