import { SlashCommandBuilder, Routes, REST } from "discord.js"
import { AUTH_TOKEN, APP_ID } from "./config.json"


const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
    .map(command => command.toJSON())

const rest = new REST({ version: '10' }).setToken(AUTH_TOKEN)

rest.put(Routes.applicationCommands(APP_ID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error)