declare module "hls-server" {
	import * as http from "http";

	interface HLSServerOptions {
		path?: string;
		dir?: string;
		debugPlayer?: boolean;
		provider?: unknown; // idfk gang
	}

	class HLSServer {
		constructor(server: number | http.Server, opts?: HLSServerOptions);
		attach(server: number | http.Server, opts?: HLSServerOptions): void;
		_middleware(req: http.IncomingMessage, res: http.ServerResponse, next: () => void): void;
		_writeDebugPlayer(res: http.ServerResponse, next: () => void): void;
		_writeManifest(req: http.IncomingMessage, res: http.ServerResponse, next: () => void): void;
		_writeSegment(req: http.IncomingMessage, res: http.ServerResponse, next: () => void): void;
	}

	export = HLSServer;
}
