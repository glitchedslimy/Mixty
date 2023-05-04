import { ActivityType, Client, ClientOptions, Collection } from 'discord.js'
import { logger } from '../../../../shared/src/utils/logger'
import { CommandType } from '../types/command'
import { loadCommands, loadEvents } from '../utils/file'
import { BotActivity } from '../utils/interfaces/botActivity'

export class SlimedClient extends Client {
  botToken: string
  commands: Collection<string, CommandType> = new Collection()
  events = new Collection()
  guildId?: string
  dbEngine?: string
  activity?: BotActivity

  constructor(config: {
    token: string
    botOptions: ClientOptions
    guildId?: string
    dbEngine?: string
    activity?: BotActivity
  }) {
    super(config.botOptions)
    this.botToken = config.token
    this.guildId = config.guildId
    this.dbEngine = config.dbEngine
    this.activity = config.activity
  }

  async start() {
    logger.info(`🤖 Starting Mixty...`)
    this.on('ready', async () => {
      this.user?.setActivity({
        name: this.activity?.name ?? 'Mixty - /help',
        type: this.activity?.type ?? ActivityType.Playing,
      })
      await loadCommands(this)
      logger.info('🤓☝️ Mixty is up and ready!')
    })
    await loadEvents(this)
    await this.login(this.botToken)
  }
}
