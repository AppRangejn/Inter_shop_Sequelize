'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Models',
      [
        {
          id: 1,
          title: 'MacBook Pro 16 M3',
          description: 'Професійний робочий лептоп',
          brand_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: 'iPhone 15 Pro Max',
          description: 'Титановий флагман Apple',
          brand_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: 'Galaxy S24 Ultra',
          description: 'Флагман зі штучним інтелектом',
          brand_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: 'ROG Zephyrus G16',
          description: 'Ігровий ультрабук',
          brand_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: 'Zenbook 14 OLED',
          description: 'Компактний ноутбук з OLED-екраном',
          brand_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          title: 'Xiaomi 14',
          description: 'Компактний смартфон з оптикою Leica',
          brand_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          title: 'WH-1000XM5',
          description: 'Повнорозмірні навушники з ANC',
          brand_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Models', null, {});
  },
};
