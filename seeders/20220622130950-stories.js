"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Testestest",
          content:
            "This is a story about testing. I'm writing this so I can test if everything works well. But how does it end?",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Test-Assessment",
          content:
            "I'm making a test-final-assessment now. I'm very excited, and I like the errors I got. Because now I'm panicing less than on the real final assessment next week. And I can learn from it.",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Lovestory Dummy-candies",
          content:
            "This is a story about Dummy-candies. Dummy1 and Dummy2 fell in love. They lived happily ever after. The end.",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "About Dummy-candies",
          content:
            "The Dummy-box contains delicious small fruit candies. Dummy has a weight of 10 grams and is supplied per box.",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
