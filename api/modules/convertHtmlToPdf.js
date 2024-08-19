const puppeteer = require('puppeteer');

async function convertHtmlToPdf(htmlContent, outputPath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set HTML content
    await page.setContent(htmlContent);
    
    // Generate PDF
    await page.pdf({ path: outputPath, format: 'A4' });
    
    await browser.close();
  }

  module.exports = {convertHtmlToPdf}