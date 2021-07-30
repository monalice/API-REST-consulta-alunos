const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const getProducts = require('./routers/studentRouter');

app.use('/', getProducts);

module.exports = app;