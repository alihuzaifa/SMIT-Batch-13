import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

// Configuring Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'alihuzaifa1995@gmail.com',
        pass: 'vasf ydor ovrv kbvx',
    },
});

const app = express();
app.use(bodyParser.json());


app.post('/email', async (req, res) => {
    try {
        const { email } = req?.body;
        // For Admin
        await transporter.sendMail({
            from: 'alihuzaifa1995@gmail.com',
            to: email,
            subject: 'Testing',
            html: `<h1>Hello World Email Testing by Nodemailer</h1>`
        });

        // For User
        await transporter.sendMail({
            from: 'alihuzaifa1995@gmail.com',
            to: email,
            subject: 'Testing',
            html: `<h1>Hello World Email Testing by Nodemailer</h1>`
        });
        return res.send({
            message: 'Email Send Successfully'
        })
    } catch (error) {
        console.log(`Error`, error);
    }
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})