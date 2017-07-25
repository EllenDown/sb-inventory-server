const knex = require('./db/knex')

module.exports = {
  getProducts: function(){
    return knex('product')
  }
};
