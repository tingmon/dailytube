import User from "../models/User";

export const signupGet = (req, res) => {
	res.render("signup", { pageTitle: "Create Account" });
};

export const signupPost = async (req, res) => {
	console.log(req.body);
	const { name, username, email, password, loaction } = req.body;
	await User.create({
		name,
		username,
		email,
		password,
		loaction,
	});
	return res.redirect("/login");
};

export const userEdit = (req, res) => {
	return res.send("Edit user");
};

export const userDelete = (req, res) => {
	return res.send("Delete user");
};

export const userLogin = (req, res) => {
	return res.send("Login user");
};

export const userLogout = (req, res) => {
	return res.send("Logout user");
};

export const userProfile = (req, res) => {
	return res.send("User profile");
};
