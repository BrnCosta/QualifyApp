import { Actor } from "./Actor";
import { Category } from "./Category";

export interface IMovie {
    id: number,
    title: string,
    image: string,
    sinopse: string,
    star1: string;
    star2: string;
    star3: string;
    star4: string;
    categories: string;
    releasedyear: string;
    certificate: string;
    runtime: number;
    imdb_rating: number;
    numvotes: number;
    videoid: string;
}