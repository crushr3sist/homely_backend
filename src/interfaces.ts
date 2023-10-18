interface IShows {
	name: string;
	episodes: string[];
}

interface IDefaultData {
	directories: {
		id: string;
		path: string;
		folderName: string;
		fileCount: number;
	}[];

	shows: {
		refId: string;
		showName: string;
		// thumbnails
	}[];

	movies: {
		refId: string;
		movieName: string;
		// thumbnails
	}[];
}

export { IShows, IDefaultData };
