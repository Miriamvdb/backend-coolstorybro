// import the Router class from express
const { Router } = require("express");
// import the corresponding model
const User = require("../models").user;
// instantiate a router
const router = new Router();

// register a GET / route that makes a test
// TEST: http :4000/users/test
router.get("/test", (req, res) => {
  res.send("Test..");
});

// GET all users `localhost:4000/`
// http GET :4000/users/
router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (e) {
    console.log(e.message);
  }
});

// export the router
module.exports = router;
