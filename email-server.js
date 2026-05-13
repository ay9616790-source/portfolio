import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ay9616790@gmail.com',
        pass: 'svhrbsitsgalsucv' // App Password provided by user
    }
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'ay9616790@gmail.com',
        to: 'ay9616790@gmail.com',
        subject: `Portfolio Contact: Message from ${name}`,
        text: `You have received a new message from your portfolio website.\n\nSender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Failed to send message' });
        } else {
            res.status(200).json({ success: true, message: 'Message sent successfully' });
        }
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Node.js Email Server running on http://localhost:${PORT}`);
});
