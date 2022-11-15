import Movie from "domain/entities/Movie";
import MovieRepository from "domain/repositories/MovieRepository";

import * as Postgres from '../postgres/connection';

export default class MovieDataSource implements MovieRepository {

    public async getMovieByName(name: string): Promise<Movie> {
        const query = `
            SELECT 
                series_title as Title, poster_link as Image,
                overview as Sinopse, star1 as Star1, star2 as Star2,
                star3 as Star3, star4 as Star4, genre as Categories,
                released_year as ReleasedYear, certificate as Certificate,
                runtime as Runtime, imdb_rating as IMDB_Rating, 
                no_of_votes as NumVotes 
            FROM QUALIFY.MOVIES 
            WHERE SERIES_TITLE LIKE '%'||$1||'%' LIMIT 1`;

        const result = await Postgres.query(query, [name]);
        const movie: Movie = result.rows[0];
        
        return movie;
    }

    public async getMoviesByCategory(category: string): Promise<Movie[]> {
        const query = `
            SELECT 
                series_title as Title, poster_link as Image,
                overview as Sinopse, star1 as Star1, star2 as Star2,
                star3 as Star3, star4 as Star4, genre as Categories,
                released_year as ReleasedYear, certificate as Certificate,
                runtime as Runtime, imdb_rating as IMDB_Rating, 
                no_of_votes as NumVotes 
            FROM QUALIFY.MOVIES 
            WHERE GENRE LIKE '%'||$1||'%';`;

        const result = await Postgres.query(query, [category]);
        const movies: Movie[] = result.rows;
        
        return movies;
    }
}