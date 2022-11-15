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

    public async getMovieByName(movieName: string): Promise<Movie> {
        return await this._movieRepository.getMovieByName(movieName);
    }

    public async getMoviesByCategory(category: string): Promise<Movie[]> {
        return await this._movieRepository.getMoviesByCategory(category);
    }

    public async calculateMovieRate(movieName: string): Promise<number> {

        const movie = await this._movieRepository.getMovieByName(movieName);

        const rateArray = await this._rateRepository.getAllRateByMovie(movie.Id);

        let rateMovie: number = 0;
        rateArray.forEach(rate => {
            rateMovie += rate.Rate;
        });

        rateMovie /= rateArray.length;
        return rateMovie;
    }
}