const puppeteer = require("puppeteer");


setInterval(function () {
  let time = 5;

  for (let index = 0; index < time; index++) {
    run()
      .then(() => console.log("Done"))
      .catch((error) => console.log(error));
  }
}, 50000);

async function run() {
  const videoCanal = "https://www.youtube.com/watch?v=XTJ4V3C16I4";

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(videoCanal);

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
