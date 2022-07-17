import Config from "@/config";
import Logger from "@/logger";

import Api from "@/source/api";
import App from "@/source/app";

declare global {
	var config: Config;
	var logger: Logger;

	var api: Api;
	var app: App;
}
