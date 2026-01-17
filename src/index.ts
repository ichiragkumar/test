import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Env } from "../src/config/index.js";

const app = express();
app.use(express.json());


export const ENV = Env.load();



app.use(express.json())

app.use("/auth", authRoutes);
app.use("/class", classRoutes);
app.use("/students", studentsRoutes);
app.use("/attendance", attendanceRoutes)


app.listen(ENV.PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${ENV.PORT}`);
});
