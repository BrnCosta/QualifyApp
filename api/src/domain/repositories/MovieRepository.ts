import Movie from "../entities/Movie";

export default interface MovieRepository {
    getMovieById(id: number): Promise<Movie>;
    getMoviesByCategory(category: string): Promise<Movie[]>;
    getTop100(): Promise<Movie[]>;
    getWhatWatch(): Promise<Movie[]>;
    getEditorPicks(): Promise<Movie[]>;
    getTopPicks(): Promise<Movie[]>;
    getAllMovies(): Promise<Movie[]>;
}