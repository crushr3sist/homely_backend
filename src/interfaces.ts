import { v4 as uuidv4 } from "uuid";

interface IShows {
	name: string;
	episodes: string[];
}

interface IDefaultData {
	directories: {
		id: typeof uuidv4;
		path: string;
		folderName: string;
		fileCount: number;
	}[];

	shows: {
		refId: typeof uuidv4;
		showName: string;
		// thumbnails
	}[];

	movies: {
		refId: typeof uuidv4;
		movieName: string;
		// thumbnails
	}[];
}

export { IShows, IDefaultData };
