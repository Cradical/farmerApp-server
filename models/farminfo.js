'use strict';
module.exports = (sequelize, DataTypes) => {
  const FarmInfo = sequelize.define('FarmInfo', {
    name: DataTypes.STRING,
    location: DataTypes.JSON
  }, {});
  FarmInfo.associate = function(models) {
    // associations can be defined here
  };
  return FarmInfo;
};