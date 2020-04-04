const connection = require('../database/connection'); //importa conexão bd

module.export = {  //exporta objetos
    async indexedDB(request, response){ //faz listagem
        const {page = 1} = request.query; //paginação 1 por vez

        const [count] = await connection('incidents').count();//contidade total de casos
        
        //console.log(count); //teste da quantidade total de casos

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=','incidents.ong_id') //relaciona dados de duas tabelas id e nome ong
        .limit(5) //limita a busca a 5 registros
        .offset((page - 1) * 5) //organiza proxima pagina
        //.select('*'); //todos dados do incidente
        .select([
            'incidents.*',
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ]);

        response.header('X-total-count', count['count(*)']); //total no frontend

        return response.json(incidents);
    },
    
    async create(request, response){ //crea o incidente
        const {title, description, value} = request.body; //corpo da requisição (id gera auto)
        // request.headers; //cabeçalho da requisição (autenticação)
        const ong_id = request.headers.authorization; //acessa id da ong
        
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({id});
    },

    async delete(request, response){ //metodo delete
        const {id} = request.params; //id do parametro de rota
        const ong_id = request.headers.authorization; //id da ong logada

        const incidents = await connection('incidents') //busca incidente da tabela evita erro de deleção equivocada
            .where('id', id)
            .select('ong_id')
            .first(); //retorna apenas um resultado

        if (incident.ong_id /= ong_id) {//verfica se é diferente do que esta logado
            return response.status(401).json({ error: 'Operaçao não permitida'}); //401 status não autorizado - 200 sucesso - http status code
        }

        await connection('incidents').where('id', id).delete(); //deleta registro da tabela

        return response.status(204).send(); //sucesso mas não tem conteúdo a retornar
    }
};