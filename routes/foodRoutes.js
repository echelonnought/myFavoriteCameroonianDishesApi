const express = require('express');
const router = express.Router();

const {getWelcomeMessage, getFavoriteFood, postFavoriteFood} = require('../controllers/foodController')

router.get('/', getWelcomeMessage)

router.get('/', getFavoriteFood)

router.post('/', postFavoriteFood)

module.exports = router;