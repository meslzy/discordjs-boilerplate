import {REST} from "@discordjs/rest";
import {Routes} from "discord-api-types/rest/v9";
import {SlashCommandBuilder} from "@discordjs/builders";

const applicationCommandsList = () => {
	const commands = [];

	const ping = new SlashCommandBuilder();
	ping.setName("ping");
	ping.setDescription("reply with pong");
	commands.push(ping);

	return commands;
};

const applicationCommands = (): Promise<any> => {
	const rest = new REST();

	rest.setToken(config.token);

	if (config.mode === "production") {
		return rest.put(Routes.applicationGuildCommands(config.applicationId, config.guildId), {
			body: applicationCommandsList(),
		});
	}

	return rest.put(Routes.applicationCommands(config.applicationId), {
		body: applicationCommandsList(),
	});
};

export default applicationCommands;
