import Actor from "../entities/Actor";


export default interface ActorRepository {
    getActorByMovie(movie: string): Promise<Actor>;
}