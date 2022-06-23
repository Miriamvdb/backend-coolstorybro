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

// export the router
module.exports = router;
