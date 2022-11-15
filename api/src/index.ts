import express from 'express';
import cors from 'cors';
import * as db from './ports/databases/postgres/connection';
import { getMovie, getMoviesByCategory } from './use-cases/MovieUseCase';

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
const app = express();


app.get('/', async (req, res) => {
    res.send('Bem vindo');
});

app.get('/api/getMovie', 
    async (req, res) => await getMovie(req, res),
);

app.get('/api/getMovieByCategory', 
    async (req, res) => await getMoviesByCategory(req, res),
);

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use((req, res) => {
    res.status(404)
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
});