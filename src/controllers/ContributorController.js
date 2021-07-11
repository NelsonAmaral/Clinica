const connection = require('../config/database/connection');
// const { v4: uuidv4 } = require('uuid')
module.exports = {
    async create(request, response){
        const { 
            contributor_name,
            contributor_email,
            contributor_password,
            contributor_sexo,
            contributor_crm,
            contributor_cpf,
            contributor_rg,
            contributor_access
        }  = request.body;
        
        const contributor = await connection('contributors')
                .select('contributor_id')
                .where(
                    'contributor_cpf', 'like', contributor_cpf
                ).first();
        if(contributor) {
            return response.status(400).json({error : "Usuário já cadastrados "});
        }
        const contributor_id = await connection('contributors').insert({
            contributor_name,
            contributor_email,
            contributor_password,
            contributor_sexo,
            contributor_crm,
            contributor_cpf,
            contributor_rg,
            contributor_access,
            'contributor_status': true

        }).returning('contributor_id');


        return response.status(201).json({msg : `Usuário já cadastrado Sucesso ${contributor_id}`});
    },

    async list(request, response){
        const contributors = await connection('contributors')
        .where("contributor_status",true)
        .select(
        "contributor_id",
        "contributor_name",
        "contributor_email",
        "contributor_sexo",
        "contributor_crm",
        "contributor_cpf",
        "contributor_rg",
        "contributor_access",
        "contributor_status",
        )


        if(!contributors) {
            return response.status(400).json({error : "Nem um usuário cadastrado "});
        }
        
        return response.status(201).json(contributors);
    },

    async listone(request,response){
        const { contributor_id } = request.params;
        const contributor = await connection('contributors')
            .select('*')
            .first()
            .where('contributor_id', contributor_id)
            .andWhere("contributor_status",true)
        ;

        if(!contributor) {
            return response.status(400).json({error : "Usuário não encontrado "});
        }

        return response.status(201).json(contributor)
    },

    async update(request,response){
        const { 
            contributor_id,
            contributor_name,
            contributor_email,
            contributor_password,
            contributor_sexo,
            contributor_crm,
            contributor_cpf,
            contributor_rg,
            contributor_access
        }  = request.body;
        
        const contributor = await connection('contributors')
            .select('*')
            .first()
            .where('contributor_id', contributor_id)
            .andWhere("contributor_status",true);

        if(!contributor) {
            return response.status(400).json({error : "Usuário não encontrado "});
        }

        const name  = await connection('contributors')
            .where('contributor_id','=',contributor_id)
            .update({
                contributor_name,
                contributor_email,
                contributor_password,
                contributor_sexo,
                contributor_crm,
                contributor_cpf,
                contributor_rg,
                contributor_access
            }).returning('contributor_name');

        return response.status(201).json({msg:`Usuário ${name} atualizado`})
    },

    async delete(request,response){
        const { contributor_id }  = request.params;
        
        const contributor = await connection('contributors')
            .select('*')
            .first()
            .where('contributor_id', contributor_id)
            .andWhere('contributor_status', true);

        if(!contributor) {
            return response.status(400).json({error : "Usuário não encontrado "});
        }

        const name  = await connection('contributors')
            .where('contributor_id','=',contributor_id)
            .update({
                'contributor_status': false
            }).returning('contributor_name');


            return response.status(201).json({msg:`Usuário ${name} deletado`})
    }


}
	
	
