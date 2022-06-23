// import the Router class from express
const { Router } = require("express");
// import the corresponding model
const Space = require("../models").space;
// instantiate a router
const router = new Router();

// register a GET / route that makes a test
// TEST: http :4000/spaces/testest
router.get("/testest", (req, res) => {
  res.send("Testest..");
});

// GET all spaces `localhost:4000/`
// http GET :4000/spaces/
router.get("/", async (req, res) => {
  try {
    const allSpaces = await Space.findAll();
    res.send(allSpaces);
  } catch (e) {
    console.log(e.message);
  }
});

// export the router
module.exports = router;
