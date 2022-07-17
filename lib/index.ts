import "module-alias/register";

import Logger from "@/logger";
import Config from "@/config";

import Api from "@source/api";
import App from "@source/app";

const config = new Config();
global.config = config;

const logger = new Logger();
global.logger = logger;

const api = new Api();
global.api = api;

const app = new App();
global.app = app;
