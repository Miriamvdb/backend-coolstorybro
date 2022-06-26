// import the Router class from express
const { Router } = require("express");
// import the corresponding model
const Space = require("../models").space;
const Story = require("../models").story;
const auth = require("../auth/middleware");

// instantiate a router
const router = new Router();

// TEST: http :4000/spaces/testest
router.get("/testest", (req, res) => {
  res.send("Testest..");
});

// http GET :4000/spaces/
router.get("/", async (req, res) => {
  try {
    const allSpaces = await Space.findAll();
    res.send(allSpaces);
  } catch (e) {
    console.log(e.message);
  }
});

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

// http DELETE :4000/spaces/1/stories/2
router.delete("/:spaceId/stories/:storyId", auth, async (req, res, next) => {
  console.log(auth);
  try {
    console.log("I want to delete a story");
    const { spaceId, storyId } = req.params;
    const story = await Story.findByPk(storyId, { include: [Space] });
    if (!story) {
      return res.send(404).send("Story not found!");
    }

    // To check if user is owner of the space
    if (story.space.userId !== req.user.id) {
      return res.send(401).send("You're not authorized to delete this story");
    }

    await story.destroy();

    res.send({ message: "Story deleted", storyId });
  } catch (e) {
    next(e);
  }
});

// export the router
module.exports = router;
