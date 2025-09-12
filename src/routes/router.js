// routes/router.js
const express = require('express');
const pizzaRouter = require('../Pizza/routes/pizza');
const ingredientRouter = require('../Ingredient/routes/ingredient');

const router = express.Router();

router.use('/pizzas', pizzaRouter);
router.use('/ingredients', ingredientRouter);

module.exports = router;
