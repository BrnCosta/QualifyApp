import { base_url } from './Constants';
import { IMovie } from '../Interface/IMovie';


type JSONResponse = {
    data?: {
        result: IMovie[],
    }
}

const fetchData = async () => {
    const result = await fetch(base_url + 'getAllMovies');

    const { data }: JSONResponse = await result.json();

    movies = data.result;
}

fetchData();

export var movies: IMovie[] = [];
