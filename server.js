// Import required 
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const PORT = 3002;

const indexRouter = require('./routes/index');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
const notesRouter = require('./routes/notes');


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
app.use(methodOverride('_method'));

// Mount the routers 
app.use('/', indexRouter);
app.use('/cards', cardsRouter);
app.use('/users', usersRouter);
app.use('/', notesRouter);


// Tell the app to listen
app.listen(PORT, function () {
    console.log(`Express is listening on port: ${PORT}`);
})
