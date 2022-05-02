import express from "express";
import {
	videoWatch,
	videoUpload,
	videoDelete,
	getVideoEdit,
	postVideoEdit,
	getVideoUpload,
	postVideoUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", videoWatch);
// One URL, with GET and POST
videoRouter.route("/:id(\\d+)/edit").get(getVideoEdit).post(postVideoEdit);
videoRouter.route("/upload").get(getVideoUpload).post(postVideoUpload);
videoRouter.get("/:id(\\d+)/delete", videoDelete);

export default videoRouter;
