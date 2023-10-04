const { Builder, By, Key } = require("selenium-webdriver");

async function example() {
  // launch the browser
  let driver = await new Builder().forBrowser("firefox").build();

  // navigate to our application
  await driver.get("https://lambdatest.github.io/sample-todo-app");

  // add a todo item using selenium
  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("This is the selenium generated todo list item", Key.RETURN);

  // close the browser after making the new todo
  setTimeout(async () => {
    await driver.quit();
  }, 2000);
}

example();
