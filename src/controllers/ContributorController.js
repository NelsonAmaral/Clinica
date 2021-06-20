const connection = require('../database/connection');
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
    }
}

	
	
