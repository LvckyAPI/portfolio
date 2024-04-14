'use server';
import "dotenv/config";
import * as nodemailer from 'nodemailer';
import {MailOptions} from "nodemailer/lib/smtp-transport";
import {MailCache} from "../cache/MailCache";


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

export async function sendEmail(replyTo: string, message: string, subject: string, triggeredHoneyPot: boolean, sessionId: string): Promise<MailStatus> {
    return new Promise((resolve) => {
        if (triggeredHoneyPot) resolve(sendStatus()); // send fake success if honeypot is set
        if (!process.env.MAIL_HOST) resolve(sendStatus(false, 'Mail host not set')); // don't send email if mail host is not set
        if ((process.env.MAIL_HOST)?.includes('example.com')) resolve(sendStatus(false, 'Mail host not set')); // don't send email if mail host is example.com (for testing purposes)

        if (!isSessionIdValid(sessionId)) resolve(sendStatus(false, 'Invalid session ID')); // don't send email if session ID is invalid
        if (MailCache.has(sessionId)) resolve(sendStatus(false, 'Email already sent. Wait 10 minutes.')); // don't send email if email was already sent (rate limiting)

        const date = Date.now();
        let mailOptions: MailOptions = {
            from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_USERNAME}>`,
            to: 'hello@schlenther.dev',
            replyTo: sanitizeEmailHeaders(replyTo),
            subject: `[SCHLENTHER.DEV] ${sanitizeEmailHeaders(subject)} #${Math.floor(date / 1000)}`,
            text: sanitizeInput(message),
        };

        return transporter.sendMail(mailOptions, (error) => {
            resolve(sendStatus(!error));
            if (!error) MailCache.set(sessionId, true);
        });
    });
}

function isSessionIdValid(sessionId: string): boolean {
    return sessionId.split("-").length === 3 && sessionId.split("-")[2] === "lw";
}

function sendStatus(success: boolean = true, message: string | null = null) {
    return {
        success: success,
        message: success ? "Email sent successfully." : (message ?? "Something went wrong. Please try again."),
    }
}

type MailStatus = {
    success: boolean;
    message: string;
};