import express from "express";
import {
	userEdit,
	userDelete,
	userProfile,
	userLogout,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", userLogout);
userRouter.get("/edit", userEdit);
userRouter.get("/delete", userDelete);
userRouter.get("/:id", userProfile);

export default userRouter;
