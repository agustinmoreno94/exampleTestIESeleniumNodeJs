const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
  let driver = await new Builder().forBrowser('internet explorer').build();
  try {
      console.log('internet explorer')
      await driver.get('https://user:pass@www3.binama.com.ar/ConsultaResultadosRI/Consulta.aspx');
      await driver.sleep(2000)
      await driver.findElement(By.id('id')).sendKeys('this');
      await driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFile('outprueba.png', image, 'base64', function(err) {
                console.log(err);
            });
        }
    );
      console.log("hola")
  } finally {
    await driver.quit();
  }
})();
