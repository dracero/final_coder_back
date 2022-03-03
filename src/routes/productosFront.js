import controllerProductos from '../controllers/productos.js'
import express from 'express'
const { Router } = express
const routerFrontProductos = new Router()
routerFrontProductos.use(express.json())
routerFrontProductos.use(express.urlencoded({ extended: true }))
import logger from '../../utils/logger.js'
import upload from '../../utils/upload.js'
/*-----------------------------------------------------------*/
//Manejador de error a nivel router
routerFrontProductos.use((err, req, res, next) => {
    logger.error(err)
    res.status(500).json({ error: 'Algo salio mal...' })
})
/*-----------------------------------------------------------*/
//Rutas
routerFrontProductos.get('/',controllerProductos.getProductos) //Vista de productos

routerFrontProductos.post('/upload', upload.single('foto'), (req, res) => {
  res.json({"url": req.headers.origin + '/images/' + req.file.filename})
}, (error, req, res, next) => {
  res.status(400).send({ error: 'archivo inexistente'})
})
/*-----------------------------------------------------------*/

export default routerFrontProductos