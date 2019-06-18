'use strict';
module.exports = (sequelize, DataTypes) => {
  const state = sequelize.define('state', {
    name: DataTypes.STRING
  }, {});
  state.associate = (models)=> {
    // associations can be defined here
    state.hasMany(models.user)
  };
  return state;
};