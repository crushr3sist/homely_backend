import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { IDirectories } from "../interfaces";

const videoFileRegex = /\.(mp4|webm|mkv|avi|mov|flv|wmv|3gp|ogv|ogm|ts|vob|mpg|mpeg|m4v|f4v|asf|divx|rmvb|rm|wm|swf)$/;

const parseDirs = (pathToDigest: string): IDirectories => {
	const returningDataStructure: IDirectories = { directories: [] };
	const pathBeingTargeted = path.basename(pathToDigest);
	const absolutePathToDigest = path.resolve(pathToDigest);
	if (fs.existsSync(absolutePathToDigest)) {
		const dirRead = fs.readdirSync(absolutePathToDigest, { recursive: true });

		const filteredDirectories = dirRead.filter((entry) => {
			const currentPath = path.join(pathBeingTargeted, entry as string);
			const stat = fs.statSync(currentPath);
			console.log(stat);
			if (
				currentPath.includes(
					(() => {
						videoFileRegex.test(currentPath);
						return currentPath;
					})()
				)
			) {
				return stat.isDirectory();
			}
		});

		filteredDirectories.forEach((dir) => {
			const pathBeingTargeted = fs.readdirSync(dir);
			const streamableFiles = [] as string[];

			pathBeingTargeted.forEach((element) => {
				if (videoFileRegex.test(element)) {
					streamableFiles.push(element);
				}
				returningDataStructure.directories.push({
					id: uuidv4().toString(),
					path: dir as string,
					folderName: dir as string,
					fileCount: streamableFiles.length,
					streamableFiles: streamableFiles,
				});
			});
		});
	}

	return returningDataStructure;
};

const updateDirData = (parsedData: IDirectories) => {
	return parsedData;
};

const digestPathVideos = (pathToDigest: IDirectories) => {
	// using the given data structure, we then execute ffmpeg conversion
	//
	return pathToDigest;
};

export { parseDirs, updateDirData, digestPathVideos };
