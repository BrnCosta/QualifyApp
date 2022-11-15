export interface IUser {
    ID: number,
    NomeCompleto: string,
    Email: string,
    IsAdm: Boolean,
}

export class User implements IUser {
    ID: number;
    NomeCompleto: string;
    Email: string;
    IsAdm: Boolean;
}