const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let port = process.env.PORT || 8080;

const app = express();

app.use(cors());

const products = require("./routes/productRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/product', products)

app.listen(port)
