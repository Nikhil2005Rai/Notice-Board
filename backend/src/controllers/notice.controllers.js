import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { Notice } from './../models/notice.model.js';
//create notice
const createNotice = asyncHandler(async (req, res) => {
  try {
    const {title, description} = req.body;

    const notice = await Notice.create({title, description, author: req.user._id})
    const createdNotice = await Notice.findById(notice._id);

    if (!createdNotice) {
      throw new ApiError(500, "Something went wrong while creating the notice");
    }

    res
    .status(201)
    .json(
        new ApiResponse(200, createdNotice, "Notice added successfully")
    )
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});


export { createNotice }