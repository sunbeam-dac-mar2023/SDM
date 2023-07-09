const { Builder, By } = require('selenium-webdriver')

async function test() {
  // load the browser specific web driver
  const builder = await new Builder().forBrowser('chrome').build()

  // load the website
  await builder.get('https://google.co.in')

  // exit or kill the builder
  builder.close()
}

// call the test()
// test()

async function test2() {
  const builder = await new Builder().forBrowser('chrome').build()
  await builder.get(
    'file:///Volumes/MyData/Sunbeam/2023/dac/pune/SDM/day10/code/selenium-demo/website/index.html'
  )
  builder.close()
}

// test2()

async function test3() {
  const builder = await new Builder().forBrowser('chrome').build()
  await builder.get(
    'file:///Volumes/MyData/Sunbeam/2023/dac/pune/SDM/day10/code/selenium-demo/website/index.html'
  )

  // find the instance of input for email
  const emailInput = await builder.findElement(By.id('email'))

  // enter required email
  await emailInput.sendKeys('test@test.com')

  // find the instance of input for password
  const passwordInput = await builder.findElement(By.id('password'))

  // enter required email
  await passwordInput.sendKeys('test1')

  // find the login button
  const button = await builder.findElement(By.id('buttonLogin'))

  // click the button
  await button.click()

  // find the element result
  const resultDiv = await builder.findElement(By.id('result'))

  // check the contents of result
  console.log(await resultDiv.getText())

  builder.close()
}

test3()
