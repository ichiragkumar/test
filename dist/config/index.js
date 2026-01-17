export class Env {
    PORT;
    MONGODB_URL;
    JWT_SECRET;
    SALT;
    constructor() {
        this.PORT = this.getNumber("PORT");
        this.MONGODB_URL = this.getString("MONGODB_URL");
        this.JWT_SECRET = this.getString("JWT_SECRET");
        this.SALT = this.getNumber("SALT");
    }
    getString(key) {
        const value = process.env[key];
        if (!value) {
            throw new Error(`Missing env variale ${key}`);
        }
        return value;
    }
    getNumber(key) {
        const value = this.getString(key);
        const isValueNumber = Number(value);
        if (Number.isNaN(isValueNumber)) {
            throw new Error(`env is not a number update it to number ${key}`);
        }
        return isValueNumber;
    }
    static load() {
        return new Env();
    }
}
//# sourceMappingURL=index.js.map