'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('companies', 'conditions');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('companies', 'conditions', {
      type: Sequelize.TEXT,
      defaultValue: '',
    });
  }
};
