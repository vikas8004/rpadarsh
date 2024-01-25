import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import adminRouter from "./routers/adminRouter.js";
import addResultRouter from "./routers/addResultRouter.js";
import showResultRouter from "./routers/showResultRouter.js";
import messageRouter from "./routers/message.router.js";
app.use(
  express.json({
    limit: "200kb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "rpaic.vercel.app",
    credentials: true,
  })
);
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1", adminRouter);
app.use("/api/v1", addResultRouter);
app.use("/api/v1", showResultRouter);
app.use("/api/v1", messageRouter);
app.use("/", (req, res) => {
  res.send("hello from server");
});
export default app;
