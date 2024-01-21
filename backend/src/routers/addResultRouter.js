import express from "express";
import addAllResult from "../controllers/addAllResult.controller.js";
const addResultRouter = express.Router();

addResultRouter.route("/result/addresult/add-all-result").post(addAllResult);

export default addResultRouter;
