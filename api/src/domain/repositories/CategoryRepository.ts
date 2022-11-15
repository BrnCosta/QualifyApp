import Category from "../entities/Category";

export default interface CategoryRepository {
    getAllCategories(): Promise<Category[]>;
}