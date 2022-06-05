const express = require('express');
const app = express();
const port = 3000;

const { sequelize, Book, Publisher, Author } = require('./models');


app.listen(port);