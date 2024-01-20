const router = require("express").Router();
const Recipe = require("../models/Recipe.model");

router.post("/recipes", (req, res, next) => {
  Recipe.create({
    title: req.body.title,
    level: req.body.level,
    ingredients: req.body.ingredients,
    cuisine: req.body.cuisine,
    dishType: req.body.dishType,
    image: req.body.image,
    duration: req.body.duration,
    creator: req.body.creator,
  })
    .then((createdRecipe) => {
      res.status(201).json(createdRecipe);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error while creating a new recipe" });
    });
});

router.get("/recipes", (req, res) => {
  Recipe.find()
    .then((listOfRecipes) => {
      res.status(200).json(listOfRecipes);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error while getting all recipe" });
    });
});

router.get("/recipes/:id", async (req, res, next) => {
  const id = req.params;
  try {
    const recipe = await Recipe.findById(id);
    res.json({
      message: "Get a single Recipe Id",
      data: recipe,
    });
  } catch (error) {
    res.status(500).json({ message: "Error while getting a single recipe" });
  }
});

router.put("/recipes/:id", (req, res, next) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updateRecipe) => {
      res.status(200).json(updateRecipe);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error while getting a single recipe" });
    });
});

router.delete("/recipes/:id", (req, res, next) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).json({ message: "Error while getting a single recipe" });
    });
});

module.exports = router;
