const express = require('express') //
const router = express.Router() //metodo
const { getTareas, createTarea, updateTarea, deleteTarea } = require('../controllers/tareasController')

            // Obtener Tarea
router.get('/', getTareas)// end point 2 
            //Crear una Tarea
router.post('/', createTarea)//metodo post end point
            //Modificar una tarea.
router.put('/:id', updateTarea)
            //Eliminar una tarea.
router.delete('/:id', deleteTarea)// metodo delete, end point

module.exports = router // exportación del router