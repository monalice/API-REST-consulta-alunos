const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
    methods : '*'
}
app.use(cors(corsOptions));
app.use(express.json());

const getProducts = require('./routers/studentRouter');

app.use('/', getProducts);

module.exports = app;