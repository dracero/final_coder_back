import { createTransport } from 'nodemailer';

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'notificacion.ch23105@gmail.com',
        pass: 'c4e7db1b'
    }
})
export default transporter