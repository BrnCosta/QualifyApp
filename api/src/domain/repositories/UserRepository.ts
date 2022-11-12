import User from "../entities/User";

export default interface UserRepository {
    getUserByName(name: string): Promise<User>;
    verifyUserLogin(email: string, password: string): Promise<User>;
}