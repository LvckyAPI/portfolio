'use server';
import "dotenv/config";
import * as nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: (process.env.MAIL_PORT as unknown as number),
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});

function sanitizeInput(input: string) {
    const htmlEntities: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '&': '&amp;',
    };

    return input.replace(/[<>"'&]/g, match => htmlEntities[match]);
}

function sanitizeEmailHeaders(input: string) {
    return input.replace(/(\r\n|\n|\r)/gm, "");
}

export async function sendEmail(replyTo: string, message: string, subject: string, triggeredHoneyPot: boolean): Promise<boolean> {
    return new Promise((resolve) => {
        if (triggeredHoneyPot) resolve(true); // send fake success if honeypot is set
        if (!process.env.MAIL_HOST) resolve(false); // don't send email if mail host is not set
        if ((process.env.MAIL_HOST)?.includes('example.com')) resolve(false); // don't send email if mail host is example.com (for testing purposes)

        const date = Date.now();
        let mailOptions = {
            from: process.env.MAIL_USERNAME,
            to: 'hello@schlenther.dev',
            replyTo: sanitizeEmailHeaders(replyTo),
            subject: `[SCHLENTHER.DEV] ${sanitizeEmailHeaders(subject)} #${Math.floor(date / 1000)}`,
            text: sanitizeInput(message),
        };

        return transporter.sendMail(mailOptions, (error) => {
            resolve(!error);
        });
    });
}
