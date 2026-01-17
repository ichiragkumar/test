export class Env {
     readonly PORT : number;
     readonly MONGODB_URL: string;
     readonly JWT_SECRET : string;
     readonly SALT: number;


    private constructor(){
        this.PORT = this.getNumber("PORT");
        this.MONGODB_URL = this.getString("MONGODB_URL");
        this.JWT_SECRET = this.getString("JWT_SECRET");
        this.SALT = this.getNumber("SALT")

    }


    private getString( key : string) : string{



        const value = process.env[key]
        if(!value){
            throw new Error(`Missing env variale ${key}`)
        }


        return value;
    }


    private getNumber(key : string) : number{

        const value = this.getString(key);
        const isValueNumber = Number(value);
        if(Number.isNaN(isValueNumber)){
            throw new Error(`env is not a number update it to number ${key}`)
        }
        return isValueNumber;
    }

    static load () : Env {
        return new Env()
    }

}