// Import required 
const express = require('express');
const PORT = 3002;

const indexRouter = require('./routes/index');
const morgan = require('morgan');


// initialize the express app
const app = express();

// connect to the DB
require('./config/database');

// Configure the view engine
app.set('view engine', 'ejs');

// Mount middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

// Mount the routers 
app.use('/', indexRouter);


// Tell the app to listen
app.listen(PORT, function () {
    console.log(`Express is listening on port: ${PORT}`);
})
