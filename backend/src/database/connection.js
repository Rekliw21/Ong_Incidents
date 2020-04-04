const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //conexao de desenvolvimento
mudule.export = connection;