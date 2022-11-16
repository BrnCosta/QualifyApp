import User from 'domain/entities/User';
import { Request, Response, json } from 'express';
import UserDataSource from '../ports/databases/data-source/UserDataSource';

const userService = new UserDataSource();

export const getUserLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.query;

        if (typeof email != 'string' || typeof password != 'string')
            throw new Error('Type not matching')

        const result = await userService.getUserLogin(email, password);
        return res.json({
            message: "user found",
            type: "success",
            data: {
                result
            }
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Error:",
            type: "error",
            data: e,
        });
    }
};

export const createAccount = async (req: Request, res: Response) => {
    try {
        const { user, password } = req.body;

        if (typeof user != 'object' || typeof password != 'string')
            throw new Error('Type not matching')

        const result = await userService.createAccount(user as User, password);
        return res.json({
            message: "user found",
            type: "success",
            data: {
                result
            }
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Error:",
            type: "error",
            data: e,
        });
    }
}