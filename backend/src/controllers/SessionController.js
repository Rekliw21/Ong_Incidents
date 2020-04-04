const connection = require('../database/connection'); //conexão bd

module.exports = {
    async create(request, response) {
        const {id} = request.body; //verificar se ong existe

        const ong = await connection('ongs') //tenta buscar ong do banco
        .where('id', id)
        .select('name') //única informação a retornar ao frontend
        .fist(); //retorna apenas um resultado

        if (!ong) {//se não existir
            return response.status(400).json({ error:'No ONG found white this ID'}); //bad request, algo errado
        }

        return response.json(ong); 

    }
}