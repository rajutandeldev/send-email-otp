const { sendEmailOtpBusiness } = require("../business/sendOtpViaEmailBusiness")

module.exports.sendEmailOtpController = (req,response) =>{
   sendEmailOtpBusiness().then(res=>{
     response.send(res)
   }).catch(error=>{
     response.send(error)
   })
}