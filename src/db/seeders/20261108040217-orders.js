'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
          id: 1,
          code: 'ORD-2026-001',
          date: new Date('2026-10-01'),
          customer: 1,
          amount: 98000.0,
          paid: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          code: 'ORD-2026-002',
          date: new Date('2026-10-05'),
          customer: 2,
          amount: 54000.0,
          paid: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          code: 'ORD-2026-003',
          date: new Date('2026-10-12'),
          customer: 1,
          amount: 14500.0,
          paid: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          code: 'ORD-2026-004',
          date: new Date('2026-10-18'),
          customer: 3,
          amount: 82000.0,
          paid: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          code: 'ORD-2026-005',
          date: new Date('2026-10-25'),
          customer: 4,
          amount: 29000.0,
          paid: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
