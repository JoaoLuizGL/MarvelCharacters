import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco',
  synchronize: true, // só para desenvolvimento!
  logging: false,
  entities: [__dirname + '/entities/*.ts'],
});