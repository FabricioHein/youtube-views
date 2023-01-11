const puppeteer = require("puppeteer");


run()
.then(() => console.log("Done"))
.catch((error) => console.log(error));

async function run() {
  const pageInsta = "https://www.instagram.com/";

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(pageInsta);

  await page.evaluate(() => {
    document.querySelector('input[name="q"]');
  });

  setInterval(
    await function () {
      browser.close();
      console.log("fechou");
    },
    30000
  );
}
