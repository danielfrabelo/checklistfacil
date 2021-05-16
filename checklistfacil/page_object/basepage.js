// Chamando o selenium-webdriver.
var webdriver = require('selenium-webdriver'); 
// O teste abaixo está sendo executado tanto com o uso do Docker, quanto sem o Docker. 
// Na linha 6, o teste será executado no chrome com o uso do Docker através do hub criando uma nova sessão na url http://localhost:4444/wd/hub.
// Na linha 7, o teste será executado através do driver do firefox mostrando o passo a passo no navegador.
var driver = new webdriver.Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build(); 
var driver = new webdriver.Builder().forBrowser('firefox').build(); 
// O teste aguarda 10000 milisegundos para executar.
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        // Retorna o objeto global driver.
        globalThis.driver = driver;
    }

    go_to_url(theURL){
        // Obtem a URL na qual iremos executar o teste.
        driver.get(theURL);
    }
}

module.exports = BasePage;