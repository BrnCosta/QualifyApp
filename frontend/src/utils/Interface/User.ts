export interface IUser {
    ID: Number,
    NomeCompleto: String,
    Email: String,
    IsAdm: Boolean,
}

export class User implements IUser {
    ID: Number;
    NomeCompleto: String;
    Email: String;
    IsAdm: Boolean;
}