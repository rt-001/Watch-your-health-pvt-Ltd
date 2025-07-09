const ejs = require("ejs");
const puppeteer = require("puppeteer");
const path = require("path");

exports.generatePDF = async ({ title, data, outputPath }) => {
  const template = path.join(
    __dirname,
    "../templates/genericReportTemplate.ejs"
  );
  const html = await ejs.renderFile(template, { title, data });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html);
  await page.pdf({ path: outputPath, format: "A4" });
  await browser.close();
};
