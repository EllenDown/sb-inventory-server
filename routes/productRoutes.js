const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get('/', (req, res) => {
  queries.getProducts()
  .then(function(products){
    res.json(products);
  });
});

module.exports = router;
