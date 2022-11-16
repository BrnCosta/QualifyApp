import React, { createContext, useState } from 'react';
import AuthContextData from '../utils/Interface/AuthContextData';
import * as auth from '../services/auth';
import { User } from '../utils/Interface/User';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<User>();

    async function logIn(email: string, password: string) {
        let userExists = false;
        await auth.logIn(email, password)
            .then((response) => {
                if (typeof response != 'undefined') {
                    setUser(response);
                    userExists = true;
                }
            });

        return userExists;
    }

    async function logOut() {
        setUser(null);
    }

    async function createAccount(user: User, password: string) {
        let created = false;
        console.log('alou')
        await auth.createAccount(user, password)
            .then(() => {
                created = true;
            });

        return created;
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, logIn, logOut, createAccount }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;