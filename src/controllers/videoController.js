import Video from "../models/Video";

export const videoHome = async (req, res) => {
	// Video.find({}, (error, videos) => {
	// 	res.render("home", { pageTitle: "Home", videos: videos });
	// });
	try {
		const videos = await Video.find({});
		console.log(videos);
		res.render("home", { pageTitle: "Home", videos: videos });
	} catch (error) {
		res.render("error occured");
	}
};

export const videoWatch = (req, res) => {
	// console.log(req.params);
	const id = req.params.id;
	res.render("watch", {
		pageTitle: `You are Watching \'\'`,
	});
};

export const getVideoEdit = (req, res) => {
	// console.log(req.params);
	const id = req.params.id;
	res.render("edit", { pageTitle: `Editing \'\'` });
};

export const postVideoEdit = (req, res) => {
	const id = req.params.id;
	const title = req.body.title;

	res.redirect(`/video/${id}`);
};

export const getVideoUpload = (req, res) => {
	res.render("upload", { pageTitle: "Upload Video" });
};

export const postVideoUpload = async (req, res) => {
	const title = req.body.title;
	const description = req.body.description;
	const hashtags = req.body.hashtags.split(",").map((tag) => {
		tag = tag.trim();
		if (tag[0] !== "#") {
			tag = `#${tag}`;
		}
		return tag;
	});
	// const video = new Video({
	// 	title: title,
	// 	description: description,
	// 	createdAt: Date.now(),
	// 	hashtags: hashtags,
	// 	meta: {
	// 		views: 0,
	// 		rating: 0,
	// 	},
	// });
	// await video.save();
	await Video.create({
		title: title,
		description: description,
		createdAt: Date.now(),
		hashtags: hashtags,
		meta: {
			views: 0,
			rating: 0,
		},
	});
	res.redirect("/");
};

export const videoSearch = (req, res) => {
	return res.send("Search video");
};

export const videoDelete = (req, res) => {
	// console.log(req.params);
	return res.send("Delete video");
};

export const videoUpload = (req, res) => {
	return res.send("Upload video");
};
