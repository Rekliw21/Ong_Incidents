const express = require('express'); //importa express
//const crypto = require('crypto'); //importa crypto que pode gerar ids complexas

const OngController = require('./controllers/OngController');
//const connection = require('./database/connection');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//routes.get('/ongs', async (request, response) => {
//    const ongs = await connection('ongs').select('*');
//    return response.json(ongs);  
//});
//app.use(express.json());

//routes.post('/users', (request, response) => {

routes.post('/sessions',SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);//lista incidentes
routes.post('/incidents', IncidentController.create); //rota
routes.delete('/incidents/:id', IncidentController.delete); //deleta dados, usa route parm


//routes.post('/ongs', async (request, response) => {
    //const{name, email, whatsapp, city, uf} = request.body;
    //const data = request.body;
    
   //const id = crypto.randomBytes(4).toString('HEX');
   // console.log(data);
    //const body = request.body;
    //console.log(body);
   
   //await connection('ongs').insert({
       //id,
       //name,
       //email,
       //whatsapp,
       //city,
       //uf,
   //}) 

    //return response.json({ id
        //evento: 'Semana Omni',
        //aluno: 'Wilker Resende'
    //});
//});

module.exports = routes; //exporta variáveis das rotas