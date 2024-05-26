const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({
  ignoreDefaultArgs: ['--disable-component-extensions-with-background-pages']
})
  const page = await browser.newPage();

  await page.goto('https://accounts.google.com');
  console.log("Reached Google accounts page");

  await page.waitForSelector('input[type="email"]');
  await page.fill('input[type="email"]', 'zeus15jan@gmail.com');
  console.log("Email entered");

  await page.keyboard.down('Enter');
  await page.keyboard.up('Enter');
  console.log("Clicked Next after entering email");

  await page.fill('input[type=password]', 'Olympus0115'); 
  console.log("Password entered");

  await page.keyboard.down('Enter');
  await page.keyboard.up('Enter');
  console.log("Clicked Next after entering password");

  // Wait for navigation to complete after login
  await page.waitForNavigation();
  console.log("Logged in successfully");

  await page.goto('https://colab.research.google.com/drive/1VVXTgAVduWMqWqk9voYLKjgIfn_wgwnK?authuser=0#scrollTo=VmzVoTZT197r');
  console.log("Reached Google Colab page");

  // Simulate pressing Ctrl+F9 to run cells
  await page.keyboard.down('Control');
  await page.keyboard.press('F9');
  await page.keyboard.up('Control');
  console.log("Cells executed");

})();

