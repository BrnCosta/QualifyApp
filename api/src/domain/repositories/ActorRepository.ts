import Actor from "../entities/Actor";


export default interface ActorRepository {
    getActorsByMovie(movie: string): Promise<Actor[]>;
}