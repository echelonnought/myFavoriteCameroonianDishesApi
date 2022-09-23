const mongoose = require('mongoose');


const foodApiSchema = mongoose.Schema({
    favoriteDish: String,
    imageUrl: String,
    price: Number,
    platesAvailable: Number
})

module.exports = mongoose.model('foodApiApp', foodApiSchema);