import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ADMIN_USER,
    pass: process.env.ADMIN_PASS,
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
