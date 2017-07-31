const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('./db/knex')
let port = process.env.PORT || 8080;

const app = express();

app.use(cors());

const products = require("./routes/productRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/product', products)

function validInput(product) {
  let validPrice = product.price.match(/[0-9]/g)
  let validQuantity = product.totalQuantity.match(/[0-9]/g)
  let validSmallQuantity = product.smallQuantityAvailable.match(/[0-9]/g)
  let validMediumQuantity = product.mediumQuantityAvailable.match(/[0-9]/g)
  let validLargeQuantity = product.largeQuantityAvailable.match(/[0-9]/g)
  let validXlQuantity = product.xlQuantityAvailable.match(/[0-9]/g)
 return validPrice && validXlQuantity && validLargeQuantity && validMediumQuantity && validSmallQuantity && validXlQuantity;
 }

app.post('/product',(req, res)=> {
  let post = req.body;
  if (validInput(post)) {
  knex('product').insert(post)
  .returning('*')
  .then(product =>{
    res.json(product);
  });
} else {
  res.json({message: "Invalid Item Input"})
}
});

app.put('/product/:id',(req, res)=> {
  let id = req.params.id;
  let put = req.body;
  knex('product').where('id' , id).update(put)
  .returning('*')
  .then(product =>{
    res.json(product);
  });
});

app.delete('/product/:id',(req, res)=> {
  let id = req.params.id;
  let drop = req.body;
  knex('product').where('id', id).del(drop)
  .returning('*')
  .then(product =>{
    res.json(product);
  });
});

app.listen(port)
