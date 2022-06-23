// import the Router class from express
const { Router } = require("express");
// import the corresponding model
const Story = require("../models").story;
// instantiate a router
const router = new Router();

// register a GET / route that makes a test
// TEST: http :4000/stories/testestest
router.get("/testestest", (req, res) => {
  res.send("Testestest..");
});

// GET all stories `localhost:4000/`
// http GET :4000/stories/
router.get("/", async (req, res) => {
  try {
    const allStories = await Story.findAll();
    res.send(allStories);
  } catch (e) {
    console.log(e.message);
  }
});

// export the router
module.exports = router;
