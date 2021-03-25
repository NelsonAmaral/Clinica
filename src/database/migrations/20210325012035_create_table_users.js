
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments('user_id')
        table.text('user_name').unique().notNullable()
        table.text('user_password').unique().notNullable()
        table.text('user_access').unique().notNullable()
        table.boolean('user_status').unique().notNullable()

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = knex => knex.schema.dropTable('users')