import User from "../../domain/entities/User";
import UserRepository from "../../domain/repositories/UserRepository";

export default class UserService {
    private _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    public async getUserLogin(email: string, password: string): Promise<User> {
        return this._userRepository.getUserLogin(email, password);
    }

    public async createAccount(user: User, password: string): Promise<boolean> {
        return this._userRepository.createAccount(user, password);
    }
}