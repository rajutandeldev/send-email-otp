const logger = require('pino')();
const { sendEmailOtpBusiness } = require("../business/sendOtpViaEmailBusiness")

module.exports.sendEmailOtpController = (req,response) =>{
   logger.info(`sendEmailOtpController `)
   sendEmailOtpBusiness(req.body).then(res=>{
    logger.info(`res | ${JSON.stringify(res)}`)
    if(res?.status == 200){
        return response.send({...res,message:`email sent successfully`})
    }
    return response.send({...res,message:`email sent failed`})
   }).catch(error=>{
     logger.info(`error | ${JSON.stringify(error)}`)
     response.send(error)
   })
}