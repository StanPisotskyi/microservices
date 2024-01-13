const express = require('express');
const app = express();
const cors = require('cors');
const proxy = require('express-http-proxy');

const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/customer', proxy('customer-service:3000'));
app.use('/shopping', proxy('shopping-service:3000'));
app.use('/product', proxy('products-service:3000'));

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});