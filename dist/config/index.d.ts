export declare class Env {
    readonly PORT: number;
    readonly MONGODB_URL: string;
    readonly JWT_SECRET: string;
    readonly SALT: number;
    private constructor();
    private getString;
    private getNumber;
    static load(): Env;
}
//# sourceMappingURL=index.d.ts.map