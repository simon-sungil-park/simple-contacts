exports.up = function(knex, Promise) {
  return Promise.all([
    (knex.schema.table('contacts', function(table) {
        table.integer('image_id');
    })),
    (knex.schema.createTable('images', table => {
      table.increments('id').primary();
      table.text('data').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    }))
  ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    (knex.schema.table('contacts', function(table) {
      table.dropColumn('image_id');
    })),
    (knex.schema.dropTableIfExists('images'))
  ])
};
