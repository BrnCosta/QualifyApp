import { User } from "./User";

export default interface AuthContextData {
    signed: boolean;
    user: object;
    logIn(email: string, password: string): Promise<boolean>;
    logOut(): Promise<void>;
    createAccount(user: User, password: string): Promise<boolean>;
}