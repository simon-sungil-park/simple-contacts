
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', table => {
    table.increments('id').primary();
    table.string('firstname').notNullable();
    table.string('lastname');
    table.string('phone');
    table.string('email');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contacts')  
};
