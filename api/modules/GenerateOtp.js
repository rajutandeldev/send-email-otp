const otplib = require('otplib');
const secret = 'secret';


const generateOtp = () => {
    const otp = otplib.authenticator.generate(secret);
    const expiry = Date.now() + 30000
    console.log(otp)
    return { otp,expiry };
}

const verifyOtp = (otpResponse) =>{
  const { otp, expiry } = otpResponse
  const verify = otplib.authenticator.check(otp,secret);
  const currentDate = Date.now()
  console.log(currentDate);
  const response = (verify && currentDate < expiry) && 2 || (verify && currentDate > expiry) && 1 && 3;
  
  console.log(response)
}

module.exports = { generateOtp, verifyOtp}