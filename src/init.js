import "./db";
import "./models/Video";
import app from "./server";

const PORT = 3000;

const handleServer = () => {
	console.log(`✅ Listening on port number ${PORT}`);
};

app.listen(PORT, () => {
	handleServer();
});
