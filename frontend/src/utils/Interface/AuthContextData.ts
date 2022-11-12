export default interface AuthContextData {
    signed: boolean;
    user: object;
    logIn(): Promise<void>;
    logOut(): Promise<void>;
}