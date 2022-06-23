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

// export the router
module.exports = router;
