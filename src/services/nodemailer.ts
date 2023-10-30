import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
    pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
  },
});

export default async function sendEmail(coinName: string, price: number) {
  await transporter.sendMail({
    from: process.env.SENDER,
    to: process.env.RECEIVE_EMAIL,
    subject: `${coinName} has reached $${price}`,
    text: `${coinName} is now at $${price}, date: ${new Date()}`,
  });
}
