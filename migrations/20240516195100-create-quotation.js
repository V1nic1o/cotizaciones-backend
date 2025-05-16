'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('quotations', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      quotationNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      validUntil: Sequelize.DATEONLY,
      clientName: Sequelize.STRING,
      clientPhone: Sequelize.STRING,
      clientEmail: Sequelize.STRING,
      items: {
        type: Sequelize.JSONB,
        defaultValue: [],
      },
      notes: Sequelize.TEXT,
      subtotal: Sequelize.DECIMAL(10, 2),
      iva: Sequelize.DECIMAL(10, 2),
      total: Sequelize.DECIMAL(10, 2),
      conditions: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('quotations');
  },
};
