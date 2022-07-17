import Discord from "discord.js";

import applicationCommands from "@client/commands";

import * as interactions from "@client/interactions";

class Client extends Discord.Client {
	constructor() {
		const intents = new Discord.Intents();

		intents.add(Discord.Intents.FLAGS.GUILDS);

		super({
			intents: intents,
		});

		this.on("ready", this.ready);
		this.on("interactionCreate", this.interactionCreate);
	}

	ready = () => {
		logger.info("client ready");
	};

	interactionCreate = (interaction: Discord.Interaction) => {
		if (interaction.isCommand()) return interactions.commandInteraction(interaction);
	};

	init = async () => {
		return applicationCommands().then(() => {
			return this.login(config.token);
		});
	};
}

export default Client;
