 var express = require('express');
var router = express.Router();

peliculasController= require('../controllers/peliculasController')
uploadImages= require('../middlewares/uploadImages')
//crear peli
// router.get('/crear',peliculasController.crear)
router.post('/crear',uploadImages.any(),peliculasController.guardar)
router.get('/',peliculasController.listado)
router.get('/:id',peliculasController.detalle)
router.put('/editar/:id',uploadImages.any(),peliculasController.actualizar)
router.post('/borrar/:id',peliculasController.borrar)

module.exports = router;
