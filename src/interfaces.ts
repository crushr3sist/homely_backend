export interface IDirectories {
	directories: {
		id: string;
		path: string;
		folderName: string;
		fileCount: number;
		streamableFiles: string[];
	}[];
}
export interface IShows {
	shows: {
		refId: string;
		showName: string;
		// thumbnails
	}[];
}
export interface IMovies {
	movies: {
		refId: string;
		movieName: string;
		// thumbnails
	}[];
}
