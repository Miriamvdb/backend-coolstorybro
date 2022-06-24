// import the Router class from express
const { Router } = require("express");
// import the corresponding model
const Space = require("../models").space;
const Story = require("../models").story;

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

// GET space by id `localhost:4000/`
// http GET :4000/spaces/1
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const space = await Space.findByPk(id, { include: [Story] });
    if (space) {
      res.send(space);
    } else {
      res.status(404).send("Space not found!");
    }
  } catch (e) {
    console.log(e.message);
  }
});

// export the router
module.exports = router;
