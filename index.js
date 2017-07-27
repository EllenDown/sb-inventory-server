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

app.post('/product',(req, res)=> {
  let post = req.body;
  knex('product').insert(post)
  .returning('*')
  .then(product =>{
    res.json(product);
  });
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
