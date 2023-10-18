import express from "express";
import { parseDirs, updateDirData, digestPathVideos } from "./directory";

const directoryRouter = express.Router();

directoryRouter.post("/add", async (req, res) => {
	try {
		const dirData = req.body.directoryToTarget;

		const parsedData = parseDirs(dirData);

		res.status(202).send(parsedData);

		// updateDirData(parsedData);

		// digestPathVideos(parsedData);

		// res.status(202).send("Directory Committed");
	} catch (e) {
		res.status(500).send(`there was an error digesting files error:${e}`);
	}
});

export default directoryRouter;
