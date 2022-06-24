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
          imageUrl:
            "https://cdn.pocket-lint.com/r/s/320x/assets/images/140427-apps-news-the-best-stupidest-and-most-famous-internet-memes-around-image8-6bluhsfxts.jpg?v1",
          createdAt: new Date("2022-06-23T13:42:26.396Z"),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Test-Assessment",
          content:
            "I'm making a test-final-assessment now. I'm very excited, and I like the errors I got. Because now I'm panicing less than on the real final assessment next week. And I can learn from it.",
          imageUrl:
            "https://www.healthyplace.com/sites/default/files/uploads/2015/09/Help-Why-am-I-Panicking.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Lovestory Dummy-candies",
          content:
            "This is a story about Dummy-candies. Dummy1 and Dummy2 fell in love. They lived happily ever after. The end.",
          imageUrl: "https://media.s-bol.com/JzzZ8qrl8A9D/q73wzKG/1200x869.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "About Dummy-candies",
          content:
            "The Dummy-box contains delicious small fruit candies. Dummy has a weight of 10 grams and is supplied per box.",
          imageUrl:
            "https://www.thomastoystore.nl/contents/media/l_fruitelladummy.jpg",
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
