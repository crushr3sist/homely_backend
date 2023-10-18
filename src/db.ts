import { JSONPreset, JSONFile } from "lowdb/node";
import { Low } from "lowdb";
import lodash from "lodash";
import { IDefaultData } from "./interfaces";

namespace DB {
	class LowWithLodash<T> extends Low<T> {
		chain: lodash.ExpChain<this["data"]> = lodash.chain(this).get("data");
	}

	const defaultData: IDefaultData = {
		directories: [], // list of digested content
		shows: [], // parsed shows
		movies: [], // parsed movies
	};

	export async function databaseInstance(): Promise<LowWithLodash<IDefaultData>> {
		await JSONPreset("dirData.json", defaultData);
		const adapter = new JSONFile<IDefaultData>("dirData.json");
		const db = new LowWithLodash(adapter, defaultData);
		await db.read();
		return db;
	}

	export async function lastId() {
		const db_instance = await databaseInstance();
		const lastID = db_instance.chain.get("directories").findLast("id").value();
		return lastID;
	}
}

(async () => {
	await DB.databaseInstance();
})();

export default DB;
