require('dotenv').config();
import express from 'express';
import { AppDataSource } from './data-source';
import { User } from './Entities/User';

const app = express();
app.use(express.json());

// Exemplo de rota
app.get('/teste', (req, res) => {
  try {
    const repo = AppDataSource.getRepository(User);
    const user = repo.findOneBy({ id: 1 });
    res.status(200).json(user);
  }
  catch (err: undefined | any) {
    res.status(err.status || 404).json({ error: 'Usuário não encontrado' });
  }
});

// Exemplo de rota para criar usuário
app.post('/user', async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(User);
    const user = repo.create(req.body);
    await repo.save(user);
    res.status(201).json(user);
  } catch (err:undefined | any) {
    res.status(err.status | 400).json({ error: 'Erro ao criar usuário' });
  }
});

const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((err) => {
  console.error('Erro ao conectar ao banco:', err);
});