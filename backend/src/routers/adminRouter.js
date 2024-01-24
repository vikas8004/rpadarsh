import express from "express";
import {
  regitsterAdmin,
  loginAdmin,
  logoutAdmin,
} from "../controllers/register.controller.js";
import verifyToken from "../middlewares/jwtVerify.middleware.js";
import studentAdmission from "../controllers/admission.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import checkStudent from "../middlewares/checkingStudent.middleware.js";

const adminRouter = express.Router();

adminRouter.route("/admin/register").post(regitsterAdmin);
adminRouter.route("/admin/login").post(loginAdmin);
adminRouter.route("/admin/logout").post(verifyToken, logoutAdmin);
adminRouter.route("/student/registration").post(
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "studentSignature", maxCount: 1 },
  ]),
  studentAdmission
);

export default adminRouter;
