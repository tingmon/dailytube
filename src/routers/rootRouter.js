import express from "express";
import { videoHome, searchVideo } from "../controllers/videoController";
import {
	signupGet,
	signupPost,
	userLogin,
} from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", videoHome);
rootRouter.get("/search", searchVideo);
rootRouter.route("/signup").get(signupGet).post(signupPost);
rootRouter.get("/login", userLogin);

// exporting a variable
export default rootRouter;
