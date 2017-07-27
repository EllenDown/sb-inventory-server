const knex = require('./db/knex')

module.exports = {
  getProducts: function(){
    return knex('product')
  },
//   createProduct: function(req, res) {
//     let post = req.body;
//     return knex('product').insert(post)
// }
}
