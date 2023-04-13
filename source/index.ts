import { Client, Events, IntentsBitField } from "discord.js";

import interactions from "~app/interactions";
import initCommands from "~app/commands";

import config from "~/config";

const intents = new IntentsBitField();

intents.add(IntentsBitField.Flags.Guilds);
intents.add(IntentsBitField.Flags.GuildMessages);

const client = new Client({
  intents,
});

client.on(Events.InteractionCreate, ( interaction ): any => {
  if ( interaction.isCommand() ) {
    return interactions.commandInteraction(interaction);
  }

  if ( interaction.isButton() ) {
    return interactions.buttonInteraction(interaction);
  }

  if ( interaction.isSelectMenu() ) {
    return interactions.selectMenuInteraction(interaction);
  }

  console.log("interaction", interaction);
});

client.on(Events.MessageCreate, ( message ) => {
  console.log("message", message);
});

client.on(Events.ClientReady, () => {
  console.log(`logged in as ${ client.user.tag }`);
});

initCommands().catch(( error ) => {
  console.error(`failed to init commands: ${ error }`);
});

client.login(config.token).catch(( error ) => {
  console.error(`failed to login: ${ error }`);
});