const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Item.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    category: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
