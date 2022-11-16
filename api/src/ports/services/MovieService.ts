import Movie from "../../domain/entities/Movie";
import MovieRepository from "../../domain/repositories/MovieRepository";
import RateRepository from "../../domain/repositories/RateRepository";

export default class MovieService {

    private _movieRepository: MovieRepository;
    private _rateRepository: RateRepository;

    constructor(movieRepository: MovieRepository, rateRepository: RateRepository) {
        this._movieRepository = movieRepository;
        this._rateRepository = rateRepository;
    }

    public async getMovieById(movieId: number): Promise<Movie> {
        return await this._movieRepository.getMovieById(movieId);
    }

    public async getMoviesByCategory(category: string): Promise<Movie[]> {
        return await this._movieRepository.getMoviesByCategory(category);
    }

    public async getTop100(): Promise<Movie[]> {
        return await this._movieRepository.getTop100();
    }

    public async getWhatWatch(): Promise<Movie[]> {
        return await this._movieRepository.getWhatWatch();
    }

    public async getEditorPicks(): Promise<Movie[]> {
        return await this._movieRepository.getEditorPicks();
    }

    public async getTopPicks(): Promise<Movie[]> {
        return await this._movieRepository.getTopPicks();
    }

    public async getAllMovies(): Promise<Movie[]> {
        return await this._movieRepository.getAllMovies();
    }
}