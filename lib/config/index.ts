class Config {
	// mode
	mode: "development" | "production";

	// token
	token: string;

	// application id
	applicationId: string;

	// guild id
	guildId: string;

	constructor() {
		if (process.env["NODE_ENV"] !== "production") {
			this.mode = "development";
		} else {
			this.mode = "production";
		}

		this.token = "OTMwNjM4MTM1OTYzMDQ1OTQ4.GjVAIj.LB6JbtcUsG3enrVFf4dy-FL7FJeSurf8PQXgxa";

		this.applicationId = "930638135963045948";
		this.guildId = "842974955972329494";
	}
}

export default Config;
