const express = require("express");
const Ingredient = require("../models/ingredientModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const ingredient = new Ingredient({
    name: req.body.name,
    quantity: req.body.quantity,
  });
  try {
    const newIngredient = await ingredient.save();
    res.status(201).json(newIngredient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }

    if (req.body.name) ingredient.name = req.body.name;
    if (req.body.quantity) ingredient.quantity = req.body.quantity;

    const updatedIngredient = await ingredient.save();
    res.json(updatedIngredient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const ingredient = await Ingredient.findByIdAndDelete(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }

    res.json({ message: "Ingredient deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
