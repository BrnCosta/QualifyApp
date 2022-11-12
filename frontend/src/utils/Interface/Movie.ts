import { Actor } from "./Actor";
import { Category } from "./Category";

export interface Movie {
    ID: Number,
    Title: string,
    Image: string,
    Sinopse: string,
    WhereToWatch: string;
    Cast: Actor[];
    Categories: Category[];
}