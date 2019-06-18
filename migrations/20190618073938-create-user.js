'use strict';
module.exports = {
  up: (queryInterface, { INTEGER, STRING, DATE }) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      userName: {
        type: STRING,
        unique: true
      },
      email: {
        type: STRING
      },
      phone: {
        type: STRING
      },
      stateId: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'states',
          key: 'id',
        },
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
    return queryInterface.dropTable('users');
  }
};