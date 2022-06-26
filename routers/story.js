// import the Router class from express
const { Router } = require("express");
// import the corresponding model
const Story = require("../models").story;
// instantiate a router
const router = new Router();

// TEST: http :4000/stories/testestest
router.get("/testestest", (req, res) => {
  res.send("Testestest..");
});

// http GET :4000/stories/
router.get("/", async (req, res) => {
  try {
    const allStories = await Story.findAll();
    res.send(allStories);
  } catch (e) {
    console.log(e.message);
  }
});

// http DELETE :4000/stories/1
// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const storyToDelete = await Story.findByPk(id);

//     if (!storyToDelete) {
//       console.log("Story not found!");
//     }

//     await storyToDelete.destroy();

//     return res.send("Story deleted");
//   } catch (e) {
//     console.log(e.message);
//   }
// });

// export the router
module.exports = router;
