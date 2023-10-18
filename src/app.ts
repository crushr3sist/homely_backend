import * as dontenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import http from "http";
import path from "path";
import { returnShowsList } from "./directory/directory";
import directoryRouter from "./directory/directoryRouter";

dontenv.config();

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT, 10);

const app: Express = express();
app.use((_req, res, next) => {
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});

app.use("/streams", express.static(path.join(__dirname, "..", "videos")));
app.use(helmet());
app.use(cors({ origin: "http://localhost:8080", credentials: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/directory", directoryRouter);
const server = http.createServer(app);

app.get("/all_videos", async (_req, res): Promise<void> => {
	const data = await returnShowsList();
	res.status(200).send(data);
});

server.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
