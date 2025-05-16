const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Quotation = sequelize.define('Quotation', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  quotationNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  validUntil: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  clientName: DataTypes.STRING,
  clientPhone: DataTypes.STRING,
  clientEmail: DataTypes.STRING,
  items: {
    type: DataTypes.JSONB, // Array de objetos: { cantidad, nombre, descripcion, precio, subtotal }
    defaultValue: [],
  },
  notes: DataTypes.TEXT,
  subtotal: DataTypes.DECIMAL(10, 2),
  iva: DataTypes.DECIMAL(10, 2),
  total: DataTypes.DECIMAL(10, 2),
  conditions: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
}, {
  tableName: 'quotations',
  timestamps: true,
});

module.exports = Quotation;
