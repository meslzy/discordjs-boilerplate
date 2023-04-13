import type { ButtonInteraction, CommandInteraction, SelectMenuInteraction } from "discord.js";

const commandInteraction = async ( interaction: CommandInteraction ) => {
  console.log("commandInteraction", interaction);
};

const buttonInteraction = async ( interaction: ButtonInteraction ) => {
  console.log("buttonInteraction", interaction);
};

const selectMenuInteraction = ( interaction: SelectMenuInteraction ) => {
  console.log("selectMenuInteraction", interaction);
};

export default {
  commandInteraction,
  buttonInteraction,
  selectMenuInteraction,
};