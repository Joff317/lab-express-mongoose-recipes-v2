// Your code here ...
const { Schema, model } = require("mongoose");

const RecipeSchema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  instructions: {
    type: String,
    require: true,
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },
  ingredients: {
    type: [String],
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: {
    type: Number,
    min: 0,
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = model("Recipe", RecipeSchema);

module.exports = Recipe;
