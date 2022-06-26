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

// Feature 4: Delete story
// http DELETE :4000/spaces/1/stories/2
router.delete("/:spaceId/stories/:storyId", auth, async (req, res, next) => {
  console.log(auth);
  try {
    console.log("I want to delete a story");
    const { spaceId, storyId } = req.params;
    const story = await Story.findByPk(storyId, { include: [Space] });
    if (!story) {
      return res.status(404).send({ message: "Story not found!" });
    }

    // To check if user is owner of the space
    if (story.space.userId !== req.user.id) {
      return res
        .status(401)
        .send({ message: "You're not authorized to delete this story" });
    }

    await story.destroy();

    res.send({ message: "Story deleted", storyId });
  } catch (e) {
    next(e);
  }
});

// Feature 5: Post a new story with corresponding id
// http POST :4000/spaces/2/stories name="Happy Cat" content="I think cats are sweet, but I'm so allergic for them. The symptoms: a running nose, itchy eyes, itchy skin and neezing aaaalll the time." imageUrl="https://previews.123rf.com/images/pitachok/pitachok1406/pitachok140600002/29506790-happy-cat.jpg"
router.post("/:id/stories", auth, async (req, res) => {
  const space = await Space.findByPk(req.params.id);
  console.log(space);

  if (space === null) {
    return res.status(404).send({ message: "Space not found!" });
  }

  if (!space.userId === req.user.id) {
    return res
      .status(403)
      .send({ message: "You're not authorized to post a story here!" });
  }

  const { name, content, imageUrl } = req.body;
  if (!name) {
    return res
      .status(400)
      .send({ message: "Story must have a name, add it please :)" });
  }
  const story = await Story.create({
    name,
    content,
    imageUrl,
    spaceId: space.id,
  });
  return res
    .status(201)
    .send({ message: "New cool story is created bro!", story });
});

// export the router
module.exports = router;
