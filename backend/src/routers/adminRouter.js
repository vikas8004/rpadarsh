import express from "express";
import {
  regitsterAdmin,
  loginAdmin,
  logoutAdmin,
} from "../controllers/register.controller.js";
import verifyToken from "../middlewares/jwtVerify.middleware.js";

const adminRouter = express.Router();

adminRouter.route("/admin/register").post(regitsterAdmin);
adminRouter.route("/admin/login").post(loginAdmin);
adminRouter.route("/admin/logout").post(verifyToken,logoutAdmin)

export default adminRouter;
