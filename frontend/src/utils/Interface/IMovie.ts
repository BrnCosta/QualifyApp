import { Actor } from "./Actor";
import { Category } from "./Category";

export interface IMovie {
    ID: number,
    Title: string,
    Image: string,
    Sinopse: string,
    WhereToWatch: string;
    Cast: Actor[];
    Categories: Category[];
}