import { Client, GatewayIntentBits } from "discord.js"
import { AUTH_TOKEN } from "./config.json"

const token = process.env.AUTH_TOKEN

console.log("Bot is starting...")

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
})

client.once('ready', () => {
    console.log('Ready!')
})

client.login(AUTH_TOKEN)