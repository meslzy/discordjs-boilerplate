interface Config {
  mode: "development" | "production";
  //
  token: string;
  applicationId: string;
  devGuildId: string;
}

const config: Config = {
  mode: process.env.NODE_ENV,
  //
  token: process.env.TOKEN,
  applicationId: process.env.APPLICATION_ID,
  devGuildId: process.env.DEV_GUILD_ID
};

export default config;
