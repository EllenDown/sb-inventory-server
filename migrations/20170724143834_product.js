
exports.up = function(knex, Promise) {
  return knex.schema.createTable('product', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('category').notNullable();
    table.string('price').notNullable();
    table.string('totalQuantity');
    table.string('smallQuantityAvailable');
    table.string('mediumQuantityAvailable');
    table.string('largeQuantityAvailable');
    table.string('xlQuantityAvailable');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('product');
};
