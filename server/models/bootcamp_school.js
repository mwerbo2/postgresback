'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bootcamp_School = sequelize.define('Bootcamp_School', {
    name: DataTypes.STRING,
    website: DataTypes.STRING,
    levels: DataTypes.ARRAY(DataTypes.STRING),
    format: DataTypes.STRING,
    format_description: DataTypes.STRING,
    languages: DataTypes.ARRAY(DataTypes.STRING),
    money_needed: DataTypes.BOOLEAN,
    online_only: DataTypes.BOOLEAN,
    number_of_students: DataTypes.INTEGER,
    contact_name: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    published: DataTypes.INTEGER,
    updated_at: DataTypes.STRING,
    country: DataTypes.STRING,
    source: DataTypes.STRING
  }, {});
  Bootcamp_School.associate = function(models) {
    // associations can be defined here
  };
  return Bootcamp_School;
};