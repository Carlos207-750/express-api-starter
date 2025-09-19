// routes/router.js
const express = require('express');
const pizzaRouter = require('../Pizza/pizzaRoute');
const ingredientRouter = require('../Ingredient/ingredientRoute');

const router = express.Router();

router.use('/pizzas', pizzaRouter);
router.use('/ingredients', ingredientRouter);

module.exports = router;
