// src/models/Product.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';
import User from './User';

class Product extends Model {
  public id!: number;
  public name!: string;
  public inStock!: boolean;
  public category!: string;
  public price!: number;
  public isActive!: boolean;
  public createdAt!: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;
  public userId!: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    inStock: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'in_stock',
    },
    category: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'is_active',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at',
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
  }
);

Product.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Product, { foreignKey: 'userId' });

export default Product;
