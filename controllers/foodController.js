const asyncHandler = require('express-async-handler');

const foodApi = require('../model/dbModel');

const getWelcomeMessage = asyncHandler(async(req, res) => {
    res.json({success: true, message: "Welcome to my list of favorite Cameroonian Dishes API :)"});
})


const getFavoriteFood = asyncHandler(async(req, res) => {
   await foodApi.find({}, (err, data) => {
       
        return res.status(200).send(data);
    }).clone().catch(function(err){ console.log(err)})
})

const postFavoriteFood = asyncHandler(async(req, res) => {
    const foodData = req.body;

    await foodApi.create(foodData, (err, data) => {
        
        return res.status(201).send(data);
    })
})



module.exports = { getWelcomeMessage, getFavoriteFood, postFavoriteFood };