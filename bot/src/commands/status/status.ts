import { getDiscordStatus } from '../../calls/discordstatus/getDiscordStatus'
import { EmbedBuilder } from '@discordjs/builders'
import { capitalizeFirstLetter, transFormToHumanDate } from '@shared/utils'
import { ApplicationCommandOptionType } from 'discord.js'
import { ISlimedCommand } from 'slimedcommands'

const status: ISlimedCommand = {
  name: 'status',
  description:
    'Shows the status of discord and if it has been any outages recently.',
  options: [
    {
      name: 'substatus',
      description: 'The service you want to check the status of.',
      type: ApplicationCommandOptionType.Subcommand,
    },
  ],
}

module.exports = status
