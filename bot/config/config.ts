import convict from "convict";
import { BotConfig } from "./config.interface";

const config = convict<BotConfig>({
  token: {
    doc: "The token of the bot",
    format: String,
    default: "",
    env: "BOT_TOKEN",
  },
});

config.validate({ allowed: "strict" });

export default config;
