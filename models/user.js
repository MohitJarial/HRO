'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    stateId: DataTypes.INTEGER
  }, {});
  user.associate = (models)=>{
    // associations can be defined here
    user.belongsTo(models.state);
  };
  return user;
};