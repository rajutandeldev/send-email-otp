const nodemailer = require('nodemailer');
const { generateOtp, verifyOtp } = require('../modules/GenerateOtp');

module.exports.sendEmailOtpBusiness=async (req) =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: 'your-email@gmail.com', // Your Gmail address
          pass: '--your gmail password -- ', // Your Gmail password or app-specific password
        },
      });
      
      const createEmailTemplate = {
        from: 'sender-email',  // sender address
        to: 'reciever-email', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>', // html body
      };
      
      const otp = generateOtp()
      verifyOtp(otp)
      async function sendEmail() {
        try {
          const info = await transporter.sendMail(createEmailTemplate);
          console.log('Email sent:', info.response);
        } catch (error) {
          console.error('Error sending email:', error);
        }
      }
      
      sendEmail();
}