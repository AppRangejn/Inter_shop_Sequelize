'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ItemCategories',
      [
        {
          id: 1,
          title: 'Компʼютери та ноутбуки',
          description: 'Портативні та стаціонарні ПК',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: 'Смартфони та телефони',
          description: 'Мобільні засоби звʼязку',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: 'Аудіо та аксесуари',
          description: 'Навушники, колонки та гарнітури',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ItemCategories', null, {});
  },
};
