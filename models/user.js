'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    stateId: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};