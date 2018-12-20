'use strict';
module.exports = (sequelize, DataTypes) => {

  const bootcamp = sequelize.define('bootcamp', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    website: DataTypes.STRING,
    levels: DataTypes.STRING,
    format: DataTypes.STRING,
    format_description: DataTypes.STRING,
    description: DataTypes.STRING,
    languages: DataTypes.STRING,
    money_needed: DataTypes.BOOLEAN,
    online_only: DataTypes.BOOLEAN,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  bootcamp.associate = function(models) {
  
  };
  return bootcamp;
};

