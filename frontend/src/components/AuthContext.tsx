import React, { createContext, useState } from 'react';
import AuthContextData from '../utils/Interface/AuthContextData';
import * as auth from '../services/auth';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState<object | null>(null);

    async function logIn() {
        const response = await auth.logIn();
        setUser(response);
    }

    async function logOut() {
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;