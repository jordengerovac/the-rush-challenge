const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

connectDB();

const playerstats = require('./routes/playerstats');

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.unsubscribe(morgan('dev'));
}

app.use('/api/v1/playerstats', playerstats);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));