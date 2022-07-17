import Client from "@app/client";

class App {
	client: Client;

	constructor() {
		this.client = new Client();

		this.client.init().then(() => {
			logger.info("client initialized");
		});
	}
}

export default App;
