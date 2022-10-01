const port =  process.env.PORT || 7777;

const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv').config();


const data = require('./data');
const connectDB = require('./config/dataBase');

const errorHandler = require('./middlewares/errorMiddleware');
const foodData = require('./routes/foodRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(errorHandler);

connectDB();


app.use('/food/api/v1/favorites', foodData);


app.listen(port, () => {
   console.log(`Listening on port ${port}`)
})