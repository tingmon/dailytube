import mongoose from "mongoose";

// export const formatHashtags = (hashtags) => {
// 	hashtags.split(",").map((tag) => {
// 		tag = tag.trim();
// 		if (tag[0] !== "#") {
// 			tag = `#${tag}`;
// 		}
// 		return tag;
// 	});
// };

const videoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		maxlength: 50,
		minlength: 2,
	},
	description: {
		type: String,
		required: true,
		trim: true,
		maxlength: 250,
		minlength: 2,
	},
	createdAt: { type: Date, required: true, default: Date.now },
	hashtags: [{ type: String, trim: true }],
	meta: {
		views: { type: Number, default: 0 },
		rating: { type: Number, default: 0 },
	},
});

videoSchema.static("formatHashtags", function (hashtags) {
	return hashtags.split(",").map((tag) => {
		tag = tag.trim();
		if (tag[0] !== "#") {
			tag = `#${tag}`;
		}
		return tag;
	});
});

// mongoose middleware fires before save a document -> problem is, it only applies to upload.
// findIdAndUpdate function does not have 'pre' middleware
// videoSchema.pre("save", async function () {
// 	console.log(this);
// 	this.hashtags = this.hashtags[0].split(",").map((tag) => {
// 		tag = tag.trim();
// 		if (tag[0] !== "#") {
// 			tag = `#${tag}`;
// 		}
// 		return tag;
// 	});
// });

const Video = mongoose.model("Video", videoSchema);

export default Video;
