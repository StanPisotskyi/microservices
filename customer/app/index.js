const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({app: 'customer', status: true});
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});