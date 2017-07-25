
exports.up = function(knex, Promise) {
  return knex.schema.createTable('product', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('category').notNullable();
    table.float('price').notNullable();
    table.integer('totalQuantity');
    table.integer('smallQuantityAvailable');
    table.integer('mediumQuantityAvailable');
    table.integer('largeQuantityAvailable');
    table.integer('xlQuantityAvailable');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('product');
};
