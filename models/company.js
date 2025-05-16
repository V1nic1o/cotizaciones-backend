const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Company = sequelize.define('Company', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
  logo: {
    type: DataTypes.STRING, // URL del logo en Cloudinary
  }
}, {
  tableName: 'companies',
  timestamps: true,
});

module.exports = Company;
