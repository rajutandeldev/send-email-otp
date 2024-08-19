const nodemailer = require('nodemailer');
const logger = require('pino')();
const { generateOtp } = require('../modules/GenerateOtp');
const { generateOtpTemplate } = require('../htmlTemplates/generateOtpTemplate');
const { convertHtmlToPdf } = require('../modules/convertHtmlToPdf');
const { convertpdftoBase64 } = require('../modules/convertpdfToBase64');
require('dotenv').config();

module.exports.sendEmailOtpBusiness=async (req) =>{
    logger.info(`Entering to business | ${req}`);
    const userName = process.env.USER_NAME;
    const password = process.env.USER_PASSWORD;
    
    // mail configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: userName, // Your Gmail address
            pass: password  // Your Gmail password or app-specific password           
        },
      });

      // Otp generate
      const otp = generateOtp()
      logger.info(`otp | ${JSON.stringify(otp)}`);

      // create html
      const html = generateOtpTemplate(otp?.otp)

      convertHtmlToPdf(html,'output.pdf')

      convertpdftoBase64('./output.pdf')

      // prepare a email sending config
      const createEmailTemplate = {
        from: 'sender-email',  // sender address
        to: 'reciever-email', // list of receivers
        subject: 'OTP verification mail', // Subject line
        html, // html body
      };
          
      async function sendEmail() {
        try {
          const info = await transporter.sendMail(createEmailTemplate);
          logger.info(`email response | ${JSON.stringify(info)}`)
          const status = ( (info?.accepted?.[0]) && 200) || 500
          return { status };
        } catch (error) {
          logger.info('Error sending email:', error);
        }
      }
      
      return sendEmail();
}