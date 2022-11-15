import express, { Request, Response, json} from 'express';
import cors from 'cors';

import MovieDataSource from '../ports/databases/data-source/MovieDataSource';
import MovieService from '../ports/services/MovieService';
import RateDataSource from '../ports/databases/data-source/RateDataSource';

const movieDataSource = new MovieDataSource();
const rateDataSource = new RateDataSource();
const movieService = new MovieService(movieDataSource, rateDataSource);

export const getMovie = async (req: Request, res: Response) => {
    try {
        const { movie } = req.query;

        if(typeof movie != "string")
            throw new Error('Query param not valid');

        const result = await movieService.getMovieByName(movie);
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

        if(typeof category != "string")
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