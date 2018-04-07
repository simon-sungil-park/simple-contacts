
exports.up = function(knex, Promise) {
  return knex.schema.table('contacts', function(table) {
    table.string('tags');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('contacts', function(table) {
    table.dropColumn('tags');
  })
};
