import winston from "winston";


class Logger {
	private winston: winston.Logger;

	private transports = () => {
		const console = new winston.transports.Console();

		return [
			console,
		];
	};

	private format = () => {
		return winston.format.combine(
			winston.format.colorize(),
			winston.format.timestamp(),
			winston.format.printf((info) => {
				return `${info.timestamp} ${info.level}: ${info.message}`;
			}),
		);
	};

	constructor() {
		const config: winston.LoggerOptions = {
			transports: this.transports(),
			format: this.format(),
		};

		this.winston = winston.createLogger(config);
	}

	public info = (message: string) => {
		return this.winston.info(message);
	};

	public warning = (message: string) => {
		return this.winston.warning(message);
	};

	public error = (message: string) => {
		return this.winston.error(message);
	};
}

export default Logger;
