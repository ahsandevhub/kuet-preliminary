const express = require("express");
const { OpenAI } = require("openai");
const Ingredient = require("../models/ingredientModel");
const Recipe = require("../models/recipeModel");
require("dotenv").config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const userPrompt = req.body.prompt;
    if (!userPrompt || typeof userPrompt !== "string") {
      return res.status(400).json({ message: "Prompt must be a valid string" });
    }

    const ingredients = await Ingredient.find().select("-_id");
    if (!ingredients.length) {
      return res
        .status(400)
        .json({ message: "No ingredients found in the database" });
    }

    const selectedIngredients = ingredients
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.min(5, ingredients.length));
    const ingredientsList = selectedIngredients
      .map((ingredient) => `${ingredient.name} (${ingredient.quantity})`)
      .join(", ");

    const systemPrompt = `You are a helpful assistant that creates recipes based on available ingredients and user preferences. Use the following ingredients: ${ingredientsList}. Respond with a recipe JSON object that includes:
    - name (string),
    - ingredients (array of strings with required quantity),
    - instructions (string),
    - taste (string),
    - cuisine (string),
    - preparationTime (string).`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    const generatedRecipe = response.choices[0].message.content;

    const {
      name,
      ingredients: recipeIngredients,
      instructions,
      taste,
      cuisine,
      preparationTime,
    } = JSON.parse(generatedRecipe);

    const newRecipe = new Recipe({
      name,
      ingredients: recipeIngredients,
      instructions,
      taste,
      cuisine,
      preparationTime,
    });

    const savedRecipe = await newRecipe.save();

    res.status(201).json({
      message: "Recipe generated and saved",
      userPrompt,
      recipe: savedRecipe,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
