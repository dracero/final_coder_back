## Resolución de las consignas

Se desarrolló un Front para las pruebas básicas, el carrito y las órdenes se muestran solo las que corresponden al usuario logueado. Info, los productos y mensajes se muestran en comun para todos los usuarios, salvo para los mensajes que en donde hay una vista de los mensajes del usuario logueado.

Más allá del front el backend está expuesto mediante API REST, para probarlo mediante POSTMAN, en la carpeta Postman del proyecto se encuetra la collection con todos los métodos implentados organizados en las carpetas: Productos, Carritos, Usuarios y Ordenes. El environment almacena el token luego del login o signup y luego se utilza en todas las operaciones envíandolo al backend para su verificacion y autorización.

De los requisitos extras opté por implementar la vista de mis órdenes, mostrando solo las órdenes del usuario logueado.

Se implenentó el proyecto en el PASS Heroku, estando disponible en https://mi-node.herokuapp.com/

## Consideraciones para probar los métodos en Postman:

1) Para crear un producto el body es el siguiente completando los datos de los campos (mandatorio):
{
    "nombre": "",
    "descripcion": "",
    "codigo": "",
    "foto": "",
    "precio": "",
    "stock": ""
}

El id y timestamp se asignan en el método.

2) Para actualizar un producto el body es el siguiente (el id es opcional el resto mandatorio)
   
{
    "id": ,
    "timestamp": ,
    "nombre": "",
    "descripcion": "",
    "codigo": "",
    "foto": "",
    "precio": "",
    "stock": ""
}

Se busca por el id que viene en el parámetro del request y de encontrarlo lo reemplazo por el producto del body

3)Para agregar un producto en el carrito, el body es el producto (el id es mandatorio, el resto opcional)
{
	"id": ,
    "timestamp": ,
    "nombre": "",
    "descripcion": "",
    "codigo": "",
    "foto": "",
    "precio": "",
    "stock": ""
}

