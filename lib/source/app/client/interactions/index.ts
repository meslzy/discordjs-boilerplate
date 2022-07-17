import {CommandInteraction} from "discord.js";

export const commandInteraction = async (interaction: CommandInteraction) => {
	if (interaction.commandName === "ping") return interaction.reply("pong");
};
