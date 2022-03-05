import {generateAuthToken} from '../../utils/jwt.js'
import path from 'path'
import {createHash, isValidPassword} from '../../utils/utilsLogin.js' 
import { usuariosDao } from '../daos/usuarios/index.js'
import transporter from '../../config/mailer.js'
import dotenv from 'dotenv'
dotenv.config()

const MAIL_NOTIFICACIONES = process.env.MAIL_NOTIFICACIONES
const __dirname = path.resolve()

export default {
    register: async (usuarioSignup) => {
        let usuario = []
        const { email } = usuarioSignup
        //verifica mail si no se cumple la expresion regular no es mail (retorna null)
        if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
            return null //mail invalido
        }
        usuario = await usuariosDao.getByEmail({'email':email}) //busca en la persistencia por email
        if (usuario.length != 0) {
            return null //usuario ya existe
        }
        if (usuarioSignup.password != usuarioSignup.password1) {
            return null //las password no coinciden
        }
        const user = usuarioSignup
        user.password = createHash(usuarioSignup.password) //encripta el password
        await usuariosDao.create(user)
        
        //Envio de mail al administrador
        let cuerpo =
            `<h3>Se ha registrado un nuevo usuario</h3>
            <a>E-mail: ${email}</a>
            <br>
            <a>Nombre: ${usuarioSignup.nombre}</a>
            <br>
            <a>Apellido: ${usuarioSignup.apellido}</a>
            <br>
            <a>Teléfono: ${usuarioSignup.telefono}</a>
            `
        const mailOptions = {
            from: '',
            to: MAIL_NOTIFICACIONES,
            subject: 'Nuevo usuario',
            html: cuerpo
        }
        
        const info = transporter.sendMail(mailOptions)
          .then((info) =>{
            console.log(info)
          })
        
        const access_token = generateAuthToken(email)
        const response =
        {
            email,
            access_token
        }
        return response
    },

    login: async (usuarioLogin) => {
        let usuario = []
        const { email, password } = usuarioLogin
        usuario = await usuariosDao.getByEmail({'email':email}) //buscar en la persistencia por email
        if (usuario.length == 0) {
            return null //usuario no registrado
        }
        const credencialesOk = usuario[0].email == email && isValidPassword(usuario[0].password,password)
        if (!credencialesOk) {
            return null //credenciales invalidas
        }
        const access_token = generateAuthToken(email)
        const response =
        {
            email,
            access_token
        }
        return response
    }
}