import Rate from 'domain/entities/Rate';
import RateRepository from 'domain/repositories/RateRepository';

import * as Postgres from '../postgres/connection';

export default class RateDataSource implements RateRepository {
    public async getAllRateByMovie(movieId: number): Promise<Rate[]> {
        const rates: Rate[] = [
            {
                User: 'Teste',
                Rate: 2,
                Comment: 'Comment',
            }
        ];

        return rates;
    }

    public async saveRateMovie(rate: Rate, movie: string): Promise<Boolean> {
        return true;
    }
}