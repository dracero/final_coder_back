import { createTransport } from 'nodemailer';

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'xxxxx@gmail.com',
        pass: 'xxxxx'
    }
})
export default transporter