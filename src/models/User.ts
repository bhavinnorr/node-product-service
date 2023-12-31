// src/models/User.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';
import Product from './Product';
class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public emailVerifiedAt?: string | null;
  public password!: string;
  public rememberToken?: string | null;
  public isActive!: boolean;
  public createdAt!: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    emailVerifiedAt: {
      type: DataTypes.STRING,
      field: 'email_verified_at',
    },
    password: {
      type: DataTypes.STRING,
    },
    rememberToken: {
      type: DataTypes.STRING,
      unique: true,
      field: 'remember_token',
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
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  }
);


export default User;
