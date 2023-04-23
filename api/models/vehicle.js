const { Sequelize } = require('sequelize');
const sequelize = require('../../config/sequelize');
/*
class Vehicle extends Model {};

Vehicle.init({
    id: {
      type: DataTypes.STRING,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    paca: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
  sequelize,
  modelName: 'Vehicle'
});
*/

const Vehicle = sequelize.define('vehicle', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  paca: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Vehicle;
