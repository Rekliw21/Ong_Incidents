const express = require('express');
const cors = require('cors'); //importa módulo segurança cors
const routes = require('./routes');  // importa rotas - ponto barra = aqurivo e nome se for pacote

const app = express();

app.use(cors()); //em desenvolvimento todos acessam, em produção incluir {origin: 'http://meuapp.com'}
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 app.get ('/', (request, response) => { 
    return response.send('Hello World !');
 });
 */

/**
 * Rota/Recurso
 */

 /**
  * Metodos HTTP para backend
  * GET busca informação
  * POST cria
  * PUT altera
  * DELETE apaga 
  */
/**app.get ('/', (request, response) => { 
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Wilker Resende'
     });
 });
   //  retorna objeto javascript (dados de usuário por exemplo)
 */