import User from "../entities/User";

export default interface UserRepository {
    getUserLogin(email: string, password: string): Promise<User>;
    createAccount(user: User, password: string): Promise<boolean>;
}