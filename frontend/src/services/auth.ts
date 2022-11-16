import { base_url } from "../utils/Data/Constants";
import { User } from "../utils/Interface/User";

type JSONResponse = {
    data?: {
        result: User,
    }
}

export async function logIn(email: string, password: string) {
    let url = base_url + `getLogin?email=${email}&password=${password}`;
    const response = await fetch(url, {
        method: 'GET'
    });

    const { data }: JSONResponse = await response.json();

    return data.result;
}

export async function createAccount(user: User, password: string) {
    const response = await fetch(base_url + 'createUser', {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
            user,
            password
        }),
    });

    const { data }: JSONResponse = await response.json();

    console.log(data);
}