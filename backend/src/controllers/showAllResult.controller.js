import {asyncHandler} from "../utils/asyncHandler.js";

const showAllResult = asyncHandler(async (req, res) => {
    console.log(req.body);
  const { resultType, year, schoolName, rollno } = req.body;
});


export default showAllResult;