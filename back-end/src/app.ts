import express from "express";
import "./db/mongoose.js";
import cors from "cors";
import { userRouter } from "./routers/user.js";

export const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
