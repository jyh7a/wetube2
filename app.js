// const express = require('express')
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app
  .use(helmet())
  .set('view engine', 'pug')
  .use(cookieParser())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(morgan("dev"))
  .use(localsMiddleware)

  .use(routes.home, globalRouter)
  .use(routes.users, userRouter)
  .use(routes.videos, videoRouter)

export default app