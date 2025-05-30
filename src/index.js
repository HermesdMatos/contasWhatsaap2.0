import express from 'express';
import { configDotenv } from 'dotenv';
import rotas from './rotas.js';

const app = express();
app.use(express.json());
app.use(rotas);

configDotenv();

const porta = process.env.PORTA || 3001;

app.listen(porta, () => {
  console.log(`Servidor rodando na porta http://localhost:${porta}`);
});