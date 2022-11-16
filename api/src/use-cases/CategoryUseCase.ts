import { Request, Response, json } from 'express';
import CategoryDataSource from "../ports/databases/data-source/CategoryDataSource";

const categoryService = new CategoryDataSource();

export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const result = await categoryService.getAllCategories();
        return res.json({
            message: "Run successfully",
            type: "success",
            data: {
                result
            }
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Error:",
            type: "error",
            data: e,
        });
    }
};