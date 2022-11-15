import Actor from "../../domain/entities/Actor";
import ActorRepository from "../../domain/repositories/ActorRepository";

export default class ActorService {
    private _actorRepository: ActorRepository;

    constructor(actorRepository: ActorRepository) {
        this._actorRepository = actorRepository;
    }

    public async getActorsByMovie(movieName: string): Promise<Actor[]> {
        return this._actorRepository.getActorsByMovie(movieName);
    }
}