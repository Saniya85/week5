const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const connectDB = require('./config/db');
const routes = require('./routes/index');
 

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
mongoose.set('debug', true);

// Connect to Database
connectDB();

// Using Routes
app.use('/api', routes); 

module.exports = app;







