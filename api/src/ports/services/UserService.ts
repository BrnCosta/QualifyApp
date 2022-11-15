import User from "../../domain/entities/User";
import UserRepository from "../../domain/repositories/UserRepository";

export default class UserService {
    private _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    public async getUserByName(name: string): Promise<User> {
        return this._userRepository.getUserByName(name);
    }

    public async getUserLogin(email: string, password: string): Promise<User> {
        return this._userRepository.getUserLogin(email, password);
    }
}