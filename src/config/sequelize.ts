import { Sequelize } from 'sequelize';
import dotenv from "dotenv";
dotenv.config();

const url = process.env.DATABASE_URL as string || ""
console.log("url", url);

const sequelize = new Sequelize(url, {
  dialect: 'mysql',
  // Other options as needed
});

export default sequelize;
