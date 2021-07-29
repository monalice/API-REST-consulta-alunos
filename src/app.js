const express = require('express');
const app = express();
const cors = require('cors');
const getProducts = require('./controller/getProducts')

app.use(cors());
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
    methods : '*'
}
app.use(cors(corsOptions));
app.use(express.json());

app.get('/', getProducts);

module.exports = app;