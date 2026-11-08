'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ItemTypes',
      [
        {
          id: 1,
          title: 'Ультрабук',
          description: 'Тонкі та продуктивні лептопи',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: 'Ігровий ноутбук',
          description: 'Потужні графічні станції',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: 'Флагманський смартфон',
          description: 'Топові мобільні пристрої',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: 'Бездротові навушники',
          description: 'TWS та повнорозмірні гарнітури',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ItemTypes', null, {});
  },
};
