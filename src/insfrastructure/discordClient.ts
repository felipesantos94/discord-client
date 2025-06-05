import { Client, Events, GatewayIntentBits } from "discord.js";
import { PresenceActivity } from "../service/presenceService";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
  ],
});

const TOKEN = process.env.DISCORD_TOKEN;

client.on(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on("presenceUpdate", (_oldPresence, newPresence) => {
  const presenceActivity: PresenceActivity = {
    name: newPresence.activities[0].name || null,
    type: newPresence.activities[0].type || null,
    details: newPresence.activities[0].details || null,
    createdTimestamp: newPresence.activities[0].createdTimestamp || null,
  };
  console.log(presenceActivity);
});

client.login(TOKEN);
