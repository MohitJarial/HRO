'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    stateId: DataTypes.INTEGER
  }, {});
  users.associate = (models)=>{
    // associations can be defined here
    users.belongsTo(models.states);
  };
  return users;
};