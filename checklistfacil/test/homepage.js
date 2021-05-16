const homepage = require('../page_object/homepage');

describe("Caso de Teste 01 (CT01) - Preencher o formulário de fale com um especialista da CheckList Fácil", function(){
    this.timeout(50000);
    beforeEach(function(){
        // Esse bloco, executa ações antes de iniciar os testes.
        console.log("> Iniciando os Testes <");
    });

    afterEach(function(){
        // Esse bloco, executa ações após finalizar os testes.
        console.log("> Teste Finalizado <");
        console.log("Resultado Obtido: Acessar o formulário mencionado no CT01 e preencher todo o formulário sem acionar o botão QUERO CONTRATAR");
    });

    it('Acessar o formulário e preencher todos os campos', function(){
        // Informando a URL que o teste deve acessar.
        var baseurl = "https://www.checklistfacil.com/fale-com-um-especialista";
        homepage.go_to_url(baseurl);

        // Informando qual o texto deve ser preenchido em cada campo.
        homepage.email('eng.daniel.rabelo@gmail.com');
        homepage.nome_completo('Daniel Ferreira Rabelo');
        homepage.telefone('62982746137');
        homepage.empresa('Checklist Fácil');
        homepage.setor('Agronegócio');
        homepage.usuarios('5 ou mais');
    })

    
})