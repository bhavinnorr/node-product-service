// src/models/ProductImage.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';
import Product from './Product';

class ProductImage extends Model {
  public id!: number;
  public fileName!: string;
  public createdAt!: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;
  public productId!: number;
}

ProductImage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fileName: {
      type: DataTypes.STRING,
      field: 'file_name',
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
    productId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'ProductImage',
    tableName: 'product_images',
  }
);

ProductImage.belongsTo(Product, { foreignKey: 'productId' });
Product.hasMany(ProductImage, { foreignKey: 'productId' });

export default ProductImage;
