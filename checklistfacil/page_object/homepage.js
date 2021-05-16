const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('../page_object/basepage');
var webdriver = require('selenium-webdriver');

class HomePage extends BasePage{
    email(email){
        //Insere dados no campo e-mail.
        driver.findElement(By.css('input[name=email]')).sendKeys(email);
    }

    nome_completo(nome_completo){
        //Insere dados no campo nome.
        driver.findElement(By.css('input[name=nome]')).sendKeys(nome_completo);
    }

    telefone(telefone){
        //Insere dados no campo telefone.
        driver.findElement(By.css('input[name=telefone]')).sendKeys(telefone);
    }

    empresa(empresa){
        //Insere dados no campo empresa.
        driver.findElement(By.css('input[name=empresa]')).sendKeys(empresa);
    }

    setor(setor){
        //Insere dados no campo select setor.
        driver.findElement(By.css('select[name=pt_segmento-lista-form-lm]')).sendKeys(setor);;
    }

    usuarios(numero_usuarios){
        //Insere dados no campo select numero_usuarios.
        driver.findElement(By.css('select[name=numero-usuarios]')).sendKeys(numero_usuarios);;
    }
}
module.exports = new HomePage();