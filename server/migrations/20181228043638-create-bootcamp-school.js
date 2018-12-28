'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bootcamp_Schools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      levels: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      format: {
        type: Sequelize.STRING
      },
      format_description: {
        type: Sequelize.STRING
      },
      languages: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      money_needed: {
        type: Sequelize.BOOLEAN
      },
      online_only: {
        type: Sequelize.BOOLEAN
      },
      number_of_students: {
        type: Sequelize.INTEGER
      },
      contact_name: {
        type: Sequelize.STRING
      },
      contact_number: {
        type: Sequelize.STRING
      },
      contact_email: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      street: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.INTEGER
      },
      updated_at: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bootcamp_Schools');
  }
};