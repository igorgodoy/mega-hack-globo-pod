import Nodemailer from 'nodemailer';

interface SendSmsParams {
  msg: string;
  to: string;
}

export default async function sendMail({
  msg,
  to,
}: SendSmsParams): Promise<boolean> {
  const testAccount = await Nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = Nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  const { messageId } = await transporter.sendMail({
    from: '"GloboPod - Mail Assistant" <donotreply@globopod.com>', // sender address
    to, // list of receivers
    subject: 'Redefinição de Senha', // Subject line
    text: msg, // plain text body
  });

  return !!messageId;
}
