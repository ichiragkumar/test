import mongoose, { Schema }  from "mongoose"
import { USER_ROLES } from "../config/enum.js"


interface IUser {
    _id: mongoose.Types.ObjectId;
    name : string;
    email : string;
    password: string;
    role : USER_ROLES;
}


const userSchema  = new Schema<IUser>({
    name : {
        required: true,
        type:String
    },
    email :{
        required:true,
        type:String,
        select:false
    },
    password:{
        required:true,
        type: String
    },
    role :{
        required:true,
        enum : Object.values(USER_ROLES),
        default: USER_ROLES.STUDENT
    }

},{
    timestamps:true
})


export const User = mongoose.model("user", userSchema)