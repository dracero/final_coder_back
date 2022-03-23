import dotenv from 'dotenv'
dotenv.config()

let administrador



export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: process.env.MONGO_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    admin: {
        username: 'admin@final',
        password: 'admin'
    },
    setUserRol: (rol) => {
        if(rol == 'admin') administrador = true
        else administrador = false
    },
    getUserRol: () => {
        return administrador
    }
}

