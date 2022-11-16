export interface IUser {
    id: number,
    nomecompleto: string,
    email: string,
    isadm: Boolean,
}

export class User implements IUser {
    id: number;
    nomecompleto: string;
    email: string;
    isadm: Boolean;
}