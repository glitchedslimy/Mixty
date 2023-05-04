import { ActivityType, Client, ClientOptions, Collection } from 'discord.js'
import { logger } from '../../../../shared/src/utils/logger'
import { CommandType } from '../types/command'
import { loadCommands, loadEvents } from '../utils/file'

export class SlimedClient extends Client {
  botToken: string
  commands: Collection<string, CommandType> = new Collection()
  events = new Collection()
  guildId?: string
  dbEngine?: string

  constructor(
    token: string,
    botOptions: ClientOptions,
    guildId?: string,
    dbEngine?: string
  ) {
    super(botOptions)
    this.botToken = token
    this.guildId = guildId
    this.dbEngine = dbEngine
  }

  async start() {
    logger.info(`🤖 Starting Mixty...`)
    this.on('ready', async () => {
      this.user?.setActivity({
        name: 'some good tunes 😎',
        type: ActivityType.Playing,
      })
      await loadCommands(this)
    })
    await loadEvents(this)
    await this.login(this.botToken)
  }
}
