import mongoose , {Schema} from "mongoose"

interface IClass {
    _id : mongoose.Types.ObjectId;
    className : string;
    teacherId : mongoose.Types.ObjectId;
    studentIds : mongoose.Types.ObjectId[];

}


const classSchema = new Schema<IClass>({
    className :{
        required:true,
        type : String
    },
    teacherId:{
        required: true,
        type : Schema.Types.ObjectId
    },
    studentIds:[{
        required: true,
        types: Schema.Types.ObjectId
     }
    ]
}, {
    timestamps:true
})


export const Class = mongoose.model("class", classSchema)