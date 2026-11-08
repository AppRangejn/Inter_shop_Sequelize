'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Brands',
      [
        {
          id: 1,
          title: 'Apple',
          description: 'Техніка та пристрої від Apple',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: 'Samsung',
          description: 'Південнокорейський виробник електроніки',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: 'Asus',
          description: 'Ноутбуки, материнські плати та компоненти',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: 'Xiaomi',
          description: 'Смартфони та розумна техніка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: 'Sony',
          description: 'Аудіотехніка, камери та консолі',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Brands', null, {});
  },
};
