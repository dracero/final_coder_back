import { createTransport } from 'nodemailer';

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'notificacion.ch23105@gmail.com',
        pass: 'c0d3rn0t1f1c4c10n'
    }
})
export default transporter