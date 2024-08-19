const fs = require('fs');
const logger = require('pino')();

const convertpdftoBase64 = (filepath)=>{
  logger.info(`convertpdftoBase64 | ${filepath}`)
  const pdfBuff = fs.readFileSync(filepath);

  const base64 = pdfBuff.toString('base64');
  logger.info(`base64 | ${base64}`)
}
module.exports = { convertpdftoBase64 }