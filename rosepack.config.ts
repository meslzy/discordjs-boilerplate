import { defineConfig } from "rosepack";

export default defineConfig(() => {
  return {
    defineDotEnv: true,
    externalDeps: true,
  };
});