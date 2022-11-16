import User from "domain/entities/User";
import UserRepository from "domain/repositories/UserRepository";

import * as Postgres from '../postgres/connection';

export default class UserDataSource implements UserRepository {

    public async getUserLogin(email: string, password: string): Promise<User> {
        const query = `SELECT id, name as nomecompleto, email, key as password, isadm 
        FROM QUALIFY.USERS WHERE email = $1 AND key = $2`;

        const result = await Postgres.query(query, [email, password]);
        const user: User = result.rows[0];

        return user;
    }

    public async createAccount(user: User, password: string): Promise<boolean> {
        const query = `
            INSERT INTO QUALIFY.USERS(name, email, key, isadm) 
            VALUES($1, $2, $3, false);`;

        const result = await Postgres
            .query(query, [user.nomecompleto, user.email, password]);

        return true;
    }
}