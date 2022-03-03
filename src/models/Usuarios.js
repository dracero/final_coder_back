import ContenedorMongoDb from "../contenedores/contenedorMongoDB.js"

class ProductosDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('usuarios', {
            email: { type: String, required: true },
            password: { type: String, required: true },
            nombre: { type: String, required: true },
            apellido: { type: String, required: true },
            telefono: { type: String, required: true }
        })
    }
}

export default ProductosDaoMongoDb