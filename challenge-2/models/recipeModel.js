const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String }],
  instructions: { type: String },
  taste: { type: String },
  cuisine: { type: String },
  preparationTime: { type: String },
});

module.exports = mongoose.model("Recipe", recipeSchema);
