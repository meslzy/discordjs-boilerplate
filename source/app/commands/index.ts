import { REST, Routes, SlashCommandBuilder } from "discord.js";

import config from "~/config";

const commandsList = () => {
  const ping = new SlashCommandBuilder();
  ping.setName("channel");
  ping.setDescription("change channel config");

  ping.addSubcommand(( subcommand ) => {
    subcommand.setName("enable");
    subcommand.setDescription("enable channel");
    subcommand.addChannelOption(( option ) => {
      option.setName("channel");
      option.setDescription("channel to enable");
      option.setRequired(true);
      return option;
    });
    return subcommand;
  });
  ping.addSubcommand(( subcommand ) => {
    subcommand.setName("disable");
    subcommand.setDescription("disable channel");
    subcommand.addChannelOption(( option ) => {
      option.setName("channel");
      option.setDescription("channel to disable");
      option.setRequired(true);
      return option;
    });
    return subcommand;
  });

  return [
    ping.toJSON(),
  ];
};

const initCommands = (): Promise<any> => {
  const rest = new REST({
    version: "10",
  });

  rest.setToken(config.token);

  if ( config.mode === "development" ) {
    return rest.put(Routes.applicationGuildCommands(config.applicationId, config.devGuildId), {
      body: commandsList(),
    });
  }

  return rest.put(Routes.applicationCommands(config.applicationId), {
    body: commandsList(),
  });
};

export default initCommands;
