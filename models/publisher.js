'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book }) {
      // define association here
      this.hasMany(Book, { foreignKey: 'publisherId'});
    }
  }
  Publisher.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'publishers',
    modelName: 'Publisher',
  });
  return Publisher;
};