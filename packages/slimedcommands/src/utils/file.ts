import { logger } from '../../../../shared/src/utils/logger'
import { SlimedClient } from '../structures/client'
import { loadFiles } from './load'

export async function loadEvents(client: any) {
  await client.events.clear()
  logger.info('📦 Loading events...')
  const eventFiles = await loadFiles('events')
  eventFiles.forEach((file) => {
    const event = require(file)
    const run = (...args: any) => event.run(...args, client)
    client.events.set(event.event, event.run)
    if (event.rest) {
      if (event.once) {
        client.rest.once(event.event, run)
      } else {
        client.once(event.event, run)
      }
    } else {
      if (event.once) {
        client.once(event.event, run)
      } else {
        client.on(event.event, run)
      }
    }
  })
  logger.info(`📦 Loaded ${eventFiles.length} events!`)
}

export async function loadCommands(client: SlimedClient) {
  logger.info('📦 Loading commands...')
  await client.commands.clear()
  const slashCommands: any[] = []
  const commandFiles = await loadFiles('commands')
  commandFiles.forEach((file) => {
    const command = require(file)
    if (!command.name) {
      return
    }
    client.commands.set(command.name, command)
    slashCommands.push(command)
  })
  logger.info(`📦 Loaded ${commandFiles.length} commands!`)
  try {
    logger.info('📦 Registering slash commands...')
    client.application?.commands.set(slashCommands)
    logger.info('📦 Registered slash commands!')
  } catch (e) {
    logger.error(e)
  }
}
