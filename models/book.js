'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Publisher }) {
      // define association here
      this.belongsTo(Publisher, { foreignKey: 'publisherId'})
    }
  }
  Book.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'books',
    modelName: 'Book',
  });
  return Book;
};