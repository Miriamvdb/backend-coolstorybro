const Space = require("../models").space;
const Story = require("../models").story;

async function spaceWithStories(id) {
  const responseQuery = await Space.findByPk(id, {
    include: [
      {
        model: Story,
        attributes: ["name"],
      },
    ],
  });
  return responseQuery.get({ plain: true });
}

spaceWithStories(1).then((space) => console.log("Space with stories", space));
// run the code with: node spacewithstories.js
