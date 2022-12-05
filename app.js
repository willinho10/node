// TODO compléter
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');
const path = require("path");
const debug = require('debug')('http');


const indexRouter = require(path.join(__dirname , "/routes", "index"));


app.use(morgan('tiny'));

app.use(express.static("public"));

app.set('views', path.join(__dirname, "views"));

app.set('view engine', 'pug');

app.use('/', indexRouter);

app.use('/categories', require(path.join(__dirname , "/routes", "categories")));

app.use('/products', require(path.join(__dirname , "/routes", "products")));

app.listen(port, () => {
    debug('HTTP server listening');
});
