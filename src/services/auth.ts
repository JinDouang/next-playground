export interface IAuthService {
    auth(username: string): Promise<any>;
}

export const AuthService: IAuthService = {

    auth: async (username: string): Promise<any> => {
        const res: Response = await fetch(`https://api.example.com/artist/${username}`);
        return res.json();
    }
};