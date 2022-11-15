import Rate from '../entities/Rate';

export default interface RateRepository {
    getAllRateByMovie(movieId: number): Promise<Rate[]>;
    saveRateMovie(rate: Rate, movie: string): Promise<Boolean>;
}