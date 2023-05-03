import config from '../config/config'
import { logger } from '../../shared/src/utils/logger'
import { Client, GatewayIntentBits, Events } from 'discord.js'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(Events.ClientReady, () => {
  logger.info('Bot is ready!')
})

// Client login with token from config on discord
client.login(config.get('token'))
