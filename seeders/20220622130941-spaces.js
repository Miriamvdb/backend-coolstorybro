"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Test Space",
          description: "This space is to test either my seederfiles are OK",
          backgroundColor: "#4e6648",
          color: "#1d261a",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Dummy Space",
          description: "Dummies, aren't that candies?",
          backgroundColor: "#edab9a",
          color: "#852209",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
