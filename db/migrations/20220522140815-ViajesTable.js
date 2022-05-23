'use strict';

const {viajeSchema, VIAJES_TABLE} = require('./../models/viajes.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(VIAJES_TABLE, viajeSchema )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(VIAJES_TABLE)
  }
};
