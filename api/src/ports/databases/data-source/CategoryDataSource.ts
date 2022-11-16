import Category from "../../../domain/entities/Category";
import CategoryRepository from "../../../domain/repositories/CategoryRepository";

import * as Postgres from '../postgres/connection';

export default class CategoryDataSource implements CategoryRepository {
    public async getAllCategories(): Promise<Category[]> {
        const query = `SELECT id, genre as name FROM QUALIFY.GENRE`;

        const result = await Postgres.query(query);
        const categories: Category[] = result.rows;

        return categories;
    }
}