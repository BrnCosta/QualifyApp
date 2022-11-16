import express from 'express';
import cors from 'cors';
import bp from 'body-parser';
import {
getEditorPicks, getMovie, getMoviesByCategory,
getTop100, getWhatWatch, getTopPicks, getAllMovies
} from './use-cases/MovieUseCase';

import { getUserLogin, createAccount } from './use-cases/UserUseCase';
import { getAllCategories } from './use-cases/CategoryUseCase';

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.send('Bem vindo');
});

app.get('/api/getMovie',
    async (req, res) => await getMovie(req, res),
);

app.get('/api/getMovieByCategory',
    async (req, res) => await getMoviesByCategory(req, res),
);

app.get('/api/getTop100',
    async (req, res) => await getTop100(req, res),
);

app.get('/api/getWhatWatch',
    async (req, res) => await getWhatWatch(req, res),
);

app.get('/api/getEditorPicks',
    async (req, res) => await getEditorPicks(req, res),
);

app.get('/api/getTopPicks',
    async (req, res) => await getTopPicks(req, res),
);

app.get('/api/getAllMovies',
    async (req, res) => await getAllMovies(req, res),
);

app.get('/api/getLogin',
    async (req, res) => await getUserLogin(req, res),
);

app.post('/api/createUser',
    async (req, res) => await createAccount(req, res),
);

app.get('/api/getAllCategories',
    async (req, res) => await getAllCategories(req, res),
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