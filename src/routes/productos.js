import controllerProductos from '../controllers/productos.js'
import {authentication} from '../../utils/jwt.js'
/*-----------------------------------------------------------*/
import express from 'express'
const { Router } = express
const routerProductos = new Router()
routerProductos.use(express.json())
routerProductos.use(express.urlencoded({ extended: true }))
/*-----------------------------------------------------------*/
//Manejador de error a nivel router
routerProductos.use((err, req, res, next) => {
    logger.error(err)
    res.status(500).json({ error: 'Algo salio mal...' })
})
/*-----------------------------------------------------------*/
// Rutas de API
//GET -> devuelve todos los productos
routerProductos.get('/',controllerProductos.getProductosApi)
 
//GET /:id -> devuelve un producto según su id.
routerProductos.get('/:id',controllerProductos.getByIdProductosApi)

//POST -> recibe y agrega un producto, y lo devuelve con su id asignado.
routerProductos.post('/', authentication,controllerProductos.postProductosApi)

//DELETE /:id -> elimina un producto según su id.
routerProductos.delete('/:id', authentication,controllerProductos.deleteByIdProductosApi)

//PUT /:id -> recibe y actualiza un producto según su id.
routerProductos.put('/:id', authentication,controllerProductos.putByIdProductosApi)

/*-----------------------------------------------------------*/

export default routerProductos