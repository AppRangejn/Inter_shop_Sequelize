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
          name: 'Кіріл Бричковський',
          email: 'kiril@example.com',
          password: passwordHash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Олександра Петренко',
          email: 'olexandra@example.com',
          password: passwordHash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Микита Маковський',
          email: 'mykyta@example.com',
          password: passwordHash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Єлизавета Пилипенко',
          email: 'yelyzaveta@example.com',
          password: passwordHash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
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
    await queryInterface.bulkDelete('Customers', null, {});
  },
};
