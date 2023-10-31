import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: `${process.env.ADMIN_USER}`,
    pass: `${process.env.ADMIN_PASS}`,
  },
});

export default async function sendEmail(
  coinName: string,
  price: number,
  text: string
) {
  await transporter.sendMail({
    from: `${process.env.SENDER}`,
    to: `${process.env.RECEIVE_EMAIL}`,
    subject: `${coinName} has reached $${price}`,
    text: `${text} ~ date: ${new Date()}`,
  });
}
