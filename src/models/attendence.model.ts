import mongoose, { Schema, Model } from "mongoose";
import { ATTENDENCE_STATUS } from "../config/enum.js";

export interface IAttendance {
  _id?: mongoose.Types.ObjectId;
  classId: mongoose.Types.ObjectId;
  studentId: mongoose.Types.ObjectId;
  status: ATTENDENCE_STATUS;
}

const attendanceSchema = new Schema<IAttendance>(
  {
    classId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    studentId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    status: {
      type: String,
      enum: Object.values(ATTENDENCE_STATUS),
      required: true
    }
  },
  { timestamps: true }
);

export const Attendance = mongoose.model("attendence", attendanceSchema)