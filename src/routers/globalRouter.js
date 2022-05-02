import express from "express";
import { videoHome, videoSearch } from "../controllers/videoController";
import { userSignup, userLogin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", videoHome);
globalRouter.get("/search", videoSearch);
globalRouter.get("/signup", userSignup);
globalRouter.get("/login", userLogin);

// exporting a variable
export default globalRouter;
