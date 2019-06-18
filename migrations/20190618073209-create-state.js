'use strict';
module.exports = {
  up: (queryInterface,{INTEGER,DATE,STRING}) => {
    return queryInterface.createTable('states', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:INTEGER
      },
      name: {
        type: STRING
      },
      createdAt: {
        allowNull: false,
        type: DATE
      },
      updatedAt: {
        allowNull: false,
        type: DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('states');
  }
};