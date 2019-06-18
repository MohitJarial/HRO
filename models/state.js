'use strict';
module.exports = (sequelize, DataTypes) => {
  const states = sequelize.define('states', {
    name: DataTypes.STRING
  }, {});
  states.associate = (models)=> {
    // associations can be defined here
    states.hasMany(models.users)
  };
  return states;
};