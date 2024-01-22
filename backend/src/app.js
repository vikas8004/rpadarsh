import express from "express";
const app = express();
import cors from "cors"
import cookieParser from "cookie-parser"
import adminRouter from "./routers/adminRouter.js";
import addResultRouter from "./routers/addResultRouter.js";
import showResultRouter from "./routers/showResultRouter.js";
app.use(express.json({
    limit:"50kb"
}
));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1",adminRouter)
app.use("/api/v1",addResultRouter)
app.use("/api/v1",showResultRouter)

export default app;
