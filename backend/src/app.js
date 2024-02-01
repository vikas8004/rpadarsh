import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import adminRouter from "./routers/adminRouter.js";
import addResultRouter from "./routers/addResultRouter.js";
import showResultRouter from "./routers/showResultRouter.js";
import messageRouter from "./routers/message.router.js";
import Admission from "./models/admission.model.js";
app.use(
  express.json()
);
app.use(
  express.urlencoded({
    extended: true,
  })
<<<<<<< HEAD
);

app.use(cors({
  origin:["https://rpaic.netlify.app","http://localhost:5173"]
}));
=======
>>>>>>> af4f9651ddea0ffe3ea012d7cc16c6847d23fc25
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors());
app.use("/api/v1", adminRouter);
app.use("/api/v1", addResultRouter);
app.use("/api/v1", showResultRouter);
app.use("/api/v1", messageRouter);
app.use("/", async (req, res) => {
  const resu = await Admission.findOne({ rollno: "240801" });
  res.send(resu);
});
export default app;
