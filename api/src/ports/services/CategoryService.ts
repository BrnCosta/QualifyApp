import Category from "../../domain/entities/Category";
import CategoryRepository from "../../domain/repositories/CategoryRepository";

export default class RateService {
    private _categoryRepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository) {
        this._categoryRepository = categoryRepository;
    }

    public async getAllRateByMovie(): Promise<Category[]> {
        return await this._categoryRepository.getAllCategories();
    }
}