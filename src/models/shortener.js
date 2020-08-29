'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shortener = sequelize.define("Shortener", {
    originalUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl: true
      }
    },
    shortUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    click: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
  },
  {},
  )
  Shortener.associate = (models) => {}
  return Shortener;
};