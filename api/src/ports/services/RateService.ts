import Rate from "../../domain/entities/Rate";
import RateRepository from "../../domain/repositories/RateRepository";

export default class RateService {
    private _rateRepository: RateRepository;

    constructor(rateRepository: RateRepository) {
        this._rateRepository = rateRepository;
    }

    public async getAllRateByMovie(movieId: number): Promise<Rate[]> {
        return await this._rateRepository.getAllRateByMovie(movieId);
    }

    public async saveRateMovie(rate: Rate, movie: string): Promise<Boolean> {
        return await this._rateRepository.saveRateMovie(rate, movie);
    }
}