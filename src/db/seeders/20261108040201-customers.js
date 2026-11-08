'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const passwordHash = bcrypt.hashSync('123456', 10);

    await queryInterface.bulkInsert(
      'Customers',
      [
        {
          id: 1,
          name: 'Кіріл Бричковський',
          email: 'kiril@example.com',
          password: passwordHash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Олександра Петренко',
          email: 'olexandra@example.com',
          password: passwordHash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Микита Маковський',
          email: 'mykyta@example.com',
          password: passwordHash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'Єлизавета Пилипенко',
          email: 'yelyzaveta@example.com',
          password: passwordHash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'Марчук Дмитро',
          email: 'dmytro@example.com',
          password: passwordHash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
