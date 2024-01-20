// Import the router
const router = require("express").Router()

router.use("/recipes", require("./recipes.routes"));

module.exports = router