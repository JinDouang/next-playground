export interface IAppService {
    getApps(username: string): Promise<any>;
    test(): Promise<any>;
}

export const AppService: IAppService = {

    getApps: async (username: string): Promise<any> => {
        const res: Response = await fetch(`https://api.example.com/artist/${username}`);
        return res.json();
    },

    test: async (): Promise<any> => {
        const res: Response = await fetch(process.env.NEXT_PUBLIC_SERVER_ENT_URL ?? '');
        return res.json();
    }
};