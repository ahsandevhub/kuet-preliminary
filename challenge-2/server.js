const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const ingredientRoutes = require("./routes/ingredientRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");

app.use("/api/ingredients", ingredientRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/chatbot", chatbotRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
