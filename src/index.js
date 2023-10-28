require("dotenv/config")

const { Client, GatewayIntentBits } = require("discord.js");
const enventHandler = require("");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

enventHandler(client);

client.login(process.env.TOKEN);