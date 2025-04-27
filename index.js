import express from 'express';
import { configDotenv } from 'dotenv';

configDotenv();

const app = express();
app.use(express.json());

const porta = process.env.PORTA || 3001;





app.listen(porta, () => {
  console.log(`Servidor rodando na porta http://localhost:${porta}`);
})