import express from "express";
import {
	videoWatch,
	uploadVideoGet,
	uploadVideoPost,
	editVideoGet,
	editVideoPost,
	deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(uploadVideoGet).post(uploadVideoPost);
videoRouter.get("/:id([0-9a-f]{24})", videoWatch);
// One URL, with GET and POST
videoRouter
	.route("/:id([0-9a-f]{24})/edit")
	.get(editVideoGet)
	.post(editVideoPost);
videoRouter.get("/:id([0-9a-f]{24})/delete", deleteVideo);

export default videoRouter;
