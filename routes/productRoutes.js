const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get('/', (req, res) => {
  queries.getProducts()
  .then(function(products){
    res.json(products);
  });
});

// router.post('/',(req, res)=> {
//   let post = req.body;
//   queries.createProduct()
//   .returning('*')
//   .then(function(productPost){
//     res.json(productPost);
//   });
// });

module.exports = router;
