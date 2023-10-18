import path from "path";
import ffmpeg from "fluent-ffmpeg";
import installer from "@ffmpeg-installer/ffmpeg";
import fs from "node:fs";

const convertAll = (pathToInject: string) => {
	//TODO - make this function into a task generator for vectorised conversion.

	const videoPath = path.join("g:", "Adventure Time", "Season 1");

	const files = fs
		.readdirSync(videoPath)
		.filter((file) => file.endsWith(".mp4"));
	console.log(files[0].split(".mp4")[0]);

	ffmpeg.setFfmpegPath(installer.path);

	files.forEach((file, i) => {
		const absolutePath = path.resolve(path.join(videoPath, files[i]));

		const file_dir = path.join(
			__dirname,
			"..",
			"videos",
			path.basename(file.split(".mp4")[0])
		);

		try {
			fs.mkdirSync(file_dir);
		} catch (err) {}

		ffmpeg(absolutePath.toString())
			.videoCodec("libx264")
			.audioCodec("aac")
			.addOptions([
				"-c:v libx264",
				"-crf 20",
				"-profile:v high",
				"-level 4.2",
				"-c:a aac",
				"-strict -2",
				"-start_number 0",
				"-hls_time 10",
				"-hls_list_size 0",
				"-f hls",
			])
			.output(path.join(file_dir, "output.m3u8"))
			.on("end", () => {
				console.log("end");
			})
			.run();
	});
};

export default convertAll;
