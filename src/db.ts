import { IDefaultData } from "./interfaces";

const defaultData: IDefaultData = {
	directories: [], // list of digested content
	shows: [], // parsed shows
	movies: [], // parsed movies
};

export async function databaseInstance() {}

(async () => {
	await databaseInstance();
})();
