const connection = require('../database/connection'); //importação do banco

module.exports = {
    async index(require, request) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return Response.json(incidents);
    }
}