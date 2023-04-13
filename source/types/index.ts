declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      //
      TOKEN: string;
      APPLICATION_ID: string;
      DEV_GUILD_ID: string;
    }
  }
}

export {};