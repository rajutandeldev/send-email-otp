const otplib = require('otplib');
const secret = 'secret';

const generateOtp = () => {
    const otp = otplib.authenticator.generate(secret);
    console.log(otp)
    return otp;
}

const verifyOtp = (otp) =>{
  const verify = otplib.authenticator.check(otp,secret);
  console.log(verify)
}

module.exports = { generateOtp, verifyOtp}