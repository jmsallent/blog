import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { connectDB } from './db/db.js';
import {routes as publicRoutes} from "./routes/public.routes.js"
import morgan from 'morgan';
export const app = express();
connectDB()

app.use(express.static('public'))
app.use(expressLayouts)
app.set('layout', 'layout')
app.set('view engine', 'ejs')
app.use(morgan("combined"))
app.use(expressLayouts);

app.use("/",publicRoutes)