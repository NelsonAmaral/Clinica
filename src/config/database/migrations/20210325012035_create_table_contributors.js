
exports.up = function(knex) {
    return knex.schema.createTable('contributors', function(table){
        table.increments('contributor_id')
        table.text('contributor_name').notNullable()
        table.text('contributor_email').unique().notNullable()
        table.text('contributor_password').notNullable()
        table.text('contributor_sexo').notNullable()
        table.text('contributor_crm').unique()
        table.text('contributor_cpf').unique().notNullable()
        table.text('contributor_rg').unique().notNullable()
        table.text('contributor_access').notNullable()
        table.boolean('contributor_status').notNullable()

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = knex => knex.schema.dropTable('contributors')