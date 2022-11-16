import { Request, Response, json } from 'express';

import MovieDataSource from '../ports/databases/data-source/MovieDataSource';
import MovieService from '../ports/services/MovieService';
import RateDataSource from '../ports/databases/data-source/RateDataSource';

const movieDataSource = new MovieDataSource();
const rateDataSource = new RateDataSource();
const movieService = new MovieService(movieDataSource, rateDataSource);

export const getMovie = async (req: Request, res: Response) => {
    try {
        const { movieId } = req.query;

        if (typeof movieId != "string")
            throw new Error('Query param not valid');

        const result = await movieService.getMovieById(Number.parseInt(movieId));
        return res.json({
            message: "Movie found",
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

export const getMoviesByCategory = async (req: Request, res: Response) => {
    try {
        const { category } = req.query;

        if (typeof category != "string")
            throw new Error('Query param not valid');

        const result = await movieService.getMoviesByCategory(category);
        return res.json({
            message: "Movies found",
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

export const getTop100 = async (req: Request, res: Response) => {
    try {
        const result = await movieService.getTop100();
        return res.json({
            message: "Movies found",
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

export const getWhatWatch = async (req: Request, res: Response) => {
    try {
        const result = await movieService.getWhatWatch();
        return res.json({
            message: "Movies found",
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

export const getEditorPicks = async (req: Request, res: Response) => {
    try {
        const result = await movieService.getEditorPicks();
        return res.json({
            message: "Movies found",
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

export const getTopPicks = async (req: Request, res: Response) => {
    try {
        const result = await movieService.getTopPicks();
        return res.json({
            message: "Movies found",
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

export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const result = await movieService.getAllMovies();
        return res.json({
            message: "Movies found",
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