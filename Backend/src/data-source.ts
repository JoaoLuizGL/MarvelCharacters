require('dotenv').config();
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './Entities/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true, // só para desenvolvimento!
  logging: false,
  entities: [User],
});