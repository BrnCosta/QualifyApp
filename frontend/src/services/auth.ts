interface Response {
    user: {
        ID: Number,
        NomeCompleto: String,
        Email: String,
        IsAdm: Boolean,
    };
}

export function logIn() : Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                user: {
                    ID: 1,
                    NomeCompleto: 'Bruno Costa',
                    Email: 'bruno@gmail.com',
                    IsAdm: false,
                }
            });
        }, 2000);
    });
}