<h1 align="left"><b> Desafio Checklist Fácil </b></h1>

<h3 align="left"> Descrição do Projeto: </h3>

Foi elaborado um teste automatizado utilizando Node.js (javascript) com o TestRunner Mocha + Selenium WebDriver, que irá acessar a a URL https://www.checklistfacil.com/fale-com-um-especialista e preencher o formulário de contato sem acionar o botão de envio. Foi utilizado Page Object Model para estruturar o código desenvolvido, além do Docker para configuração do ambiente.

<h3 align="left"> Para Execução do Teste Automatizado: </h3>

<b>P1.</b> Após efetuar o git clone do repositório e antes de executar o teste, faz-se necessário a instalação das seguintes ferramentas:

* Docker Desktop

  A Ferramenta pode ser baixada através da URL: https://www.docker.com/products/docker-desktop

* Node.js

  O Código-fonte do Node.js pode ser baixada através da URL: https://nodejs.org/pt-br/download/
  
<b>P2.</b> Após a execução do P1. edite a variável do sistema do windows Path e verifique se está configurado a variável do Node.js, caso esteja configurada favor desconsiderar este passo. Caso contrário acione o botão "Novo" e insira o caminho de instalação do Node, no meu caso foi: C:\Program Files (x86)\nodejs\

<b>P3.</b> Em seguida, abra o Docker Desktop. Caso apresente uma mensagem pedindo para instalar o WSL, basta acessar a URL https://docs.microsoft.com/pt-br/windows/wsl/install-win10 e seguir o passo-a-passo.

<b>P4.</b> Após a executação dos passos anteriores, abra o CMD e execute os comandos:

<code> docker pull selenium/standalone-chrome </code>

Em seguida, o comando:

<code> docker run -d -p 4444:4444 --name selenium-chrome selenium/standalone-chrome </code>

Espere até o fim do download e em seguida o selenium estará apto para ser executado via docker na porta 4444

<b>P5.</b> Abra uma nova instância do CMD navege até a pasta test (checklistfacil\checklistfacil\test) na qual foi clonado o repositório e execute o comando:

<code> npm test </code>

<b>P6.</b> Pronto, o teste automatizado desenvolvido foi executado!

No CMD deverá aparecer um log da seguinte forma:


  Caso de Teste 01 (CT01) - Preencher o formulário de fale com um especialista da CheckList Fácil
<br/> > Iniciando os Testes <
<br/>  √ Acessar o formulário e preencher todos os campos
<br/> > Teste Finalizado <
<br/>Resultado Obtido: Acessar o formulário mencionado no CT01 e preencher todo o formulário sem acionar o botão QUERO CONTRATAR
<br/><br/>
  1 passing (62ms)
 
<h3 align="left"> Observações Importantes: </h3>

* O teste foi desenvolvido apresentando duas formas de execução do selenium: 1º Via docker, onde não é apresentado o passo-a-passo em tela. 2º Via driver do firefox do selenium, onde o teste abre o navegador, acessa o site informado e preenche os campos do formulário. Foi apresentado desta forma, afim de demonstrar que possuo conhecimento em ambas as formas de execução.


<h3 align="left"> Contato: </h3>

Qualquer dúvidas, favor entrar em contato:

<b>Daniel Ferreira Rabelo</b><br/>
(62) 98274-6137<br/>
eng.daniel.rabelo@gmail.com
