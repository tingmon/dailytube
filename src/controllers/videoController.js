import Video from "../models/Video";

export const videoHome = async (req, res) => {
	// Video.find({}, (error, videos) => {
	// 	res.render("home", { pageTitle: "Home", videos: videos });
	// });
	try {
		const videos = await Video.find({}).sort({ createdAt: "desc" });
		// console.log(videos);
		res.render("home", { pageTitle: "Home", videos: videos, home: true });
	} catch (error) {
		res.render("error occured: ", error);
	}
};

export const videoWatch = async (req, res) => {
	// console.log(req.params);
	// 'req.params.id' is defined in the router as ':id'
	const id = req.params.id;
	const video = await Video.findById(id);
	if (video === null) {
		res.render("404", { pageTitle: "Video Not Found" });
	} else {
		res.render("watch", {
			pageTitle: `You are Watching \'${video.title}\'`,
			video: video,
		});
	}
};

export const editVideoGet = async (req, res) => {
	// console.log(req.params);
	const id = req.params.id;
	const video = await Video.findById(id);
	if (!video) {
		res.render("404", { pageTitle: "Video Not Found" });
	} else {
		res.render("edit", {
			pageTitle: `Edit \'${video.title}\'`,
			video: video,
		});
	}
};

export const editVideoPost = async (req, res) => {
	const id = req.params.id;
	const title = req.body.title;
	const description = req.body.description;
	const hashtags = req.body.hashtags;
	const video = await Video.exists({ _id: id });
	if (!video) {
		res.render("404", { pageTitle: "Video Not Found" });
	} else {
		await Video.findByIdAndUpdate(id, {
			title: title,
			description: description,
			hashtags: Video.formatHashtags(hashtags),
		});
		res.redirect(`/video/${id}`);
	}
};

export const uploadVideoGet = (req, res) => {
	res.render("upload", { pageTitle: "Upload Video" });
};

export const uploadVideoPost = async (req, res) => {
	const title = req.body.title;
	const description = req.body.description;
	const hashtags = req.body.hashtags;
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
	try {
		await Video.create({
			title: title,
			description: description,
			hashtags: Video.formatHashtags(hashtags),
		});
	} catch (error) {
		// console.log(error);
		res.render("upload", {
			pageTitle: "Upload Video",
			errorMessage: error._message,
		});
	}

	res.redirect("/");
};

export const deleteVideo = async (req, res) => {
	// console.log(req.params);
	const { id } = req.params;
	await Video.findOneAndDelete({ _id: id });
	res.redirect("/");
};

export const searchVideo = async (req, res) => {
	// req.query only works in GET method form submission
	const { keyword } = req.query;
	if (keyword) {
		// other regex is available ex) $gt, $lte ...
		// regex condition: retrieve result contains keyword as a title with case insensitive
		const videos = await Video.find({
			title: {
				$regex: new RegExp(keyword, "i"),
			},
		});
		return res.render("search", { pageTitle: "Search Video", videos: videos });
	}
	res.render("search", { pageTitle: "Search Video", videos: [] });
};
