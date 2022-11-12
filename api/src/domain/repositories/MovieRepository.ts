import Movie from "../entities/Movie";

export default interface MovieRepository {
    getMovieByName(name: string): Promise<Movie>;
    getMoviesByCategory(category: string): Promise<Movie[]>;
}