const express = require('express');
const router = express.Router();

const { getFavoriteFood, postFavoriteFood } = require('../controllers/foodController')



router.get('/', getFavoriteFood)

router.post('/', postFavoriteFood)

module.exports = router;