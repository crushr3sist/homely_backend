import fs from "fs";
import path from "path";
import db from "./db";
import { IShows } from "./interfaces";

class DirManager {
	pathToDigest: string;

	constructor(pathToDigest: string) {
		this.pathToDigest = pathToDigest;
	}

	parseDirs = () => {
		// convert the given path into a path object

		const targetedPath = path.basename(this.pathToDigest);
	};

	updateDirData = () => {
		return this.pathToDigest;
	};

	digestPathVideos = () => {
		return this.pathToDigest;
	};
}

const dirmanager = new DirManager("hello");
console.log(dirmanager.parseDirs());

const returnShowsList = async () => {
	const showsList = fs.readdirSync(path.join(__dirname, "..", "videos"));

	const episodesList = fs.readdirSync(
		path.join(__dirname, "..", "videos", "adventure-time")
	);

	const returnShows: { shows: IShows[] } = {
		shows: [],
	};

	showsList.forEach((showName) => {
		returnShows.shows.push({
			name: showName,
			episodes: episodesList,
		});
	});

	return returnShows;
};

export { returnShowsList, DirManager };
