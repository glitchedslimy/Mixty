import { getDiscordStatus } from '../../calls/discordstatus/getDiscordStatus'
import { Command } from '../../types/command/command'
import { logger } from '../../../../shared/src/utils/logger'
import { EmbedBuilder } from '@discordjs/builders'
import { capitalizeFirstLetter } from '../../../../shared/src/utils/capitalize'
import { transFormToHumanDate } from '../../../../shared/src/utils/transformDate'
import { ApplicationCommandOptionType } from 'discord.js'
const status: Command = {
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
  run: async ({ interaction }) => {
    const req = await getDiscordStatus()
    logger.info(req)
    const embed = new EmbedBuilder()
      .setColor(
        req.components.api.status === 'operational' ? 0x1ee52a : 0xe51e1e
      )
      .setTitle('Discord Status')
      .setURL(req.url)
      .setThumbnail(
        'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png'
      )
      .setDescription(`All status of discord services.`)
      .addFields(
        {
          name: 'API',
          value: `${capitalizeFirstLetter(
            req.components.api.status
          )}\n **Last update**\n ${transFormToHumanDate(
            req.components.api.time
          )}`,
          inline: true,
        },
        {
          name: 'Cloudflare',
          value: `${capitalizeFirstLetter(
            req.components.cloudflare.status
          )}\n **Last update**\n ${transFormToHumanDate(
            req.components.cloudflare.time
          )}`,
          inline: true,
        },
        {
          name: 'Brazil',
          value: `${capitalizeFirstLetter(
            req.components.zone.brazil.status
          )}\n **Last update**\n ${transFormToHumanDate(
            req.components.zone.brazil.time
          )}`,
          inline: true,
        },
        {
          name: 'Rotterdam',
          value: `${capitalizeFirstLetter(
            req.components.zone.rotterdam.status
          )}\n **Last update**\n ${transFormToHumanDate(
            req.components.zone.rotterdam.time
          )}`,
          inline: true,
        },
        {
          name: 'Hong Kong',
          value: `${capitalizeFirstLetter(
            req.components.zone.hongKong.status
          )}\n **Last update**\n ${transFormToHumanDate(
            req.components.zone.hongKong.time
          )}`,
          inline: true,
        },
        {
          name: 'India',
          value: `${capitalizeFirstLetter(
            req.components.zone.india.status
          )}\n **Last update**\n ${transFormToHumanDate(
            req.components.zone.india.time
          )}`,
          inline: true,
        },
        {
          name: 'Japan',
          value: `${capitalizeFirstLetter(
            req.components.zone.japan.status
          )}\n **Last update**\n ${transFormToHumanDate(
            req.components.zone.japan.time
          )}`,
          inline: true,
        },
        {
          name: 'Russia',
          value: `${capitalizeFirstLetter(
            req.components.zone.russia.status
          )}\n **Last update**\n ${transFormToHumanDate(
            req.components.zone.russia.time
          )}`,
          inline: true,
        },
        {
          name: 'Singapore',
          value: `${capitalizeFirstLetter(
            req.components.zone.singapore.status
          )}\n **Last update**\n ${transFormToHumanDate(
            req.components.zone.singapore.time
          )}`,
          inline: true,
        },
        {
          name: 'Last Updated',
          value: `${new Date(req.components.api.time)}`,
          inline: true,
        }
      )
      .setFooter({ text: 'Powered by discordstatus.com' })
    await interaction.reply({ embeds: [embed] })
  },
}

module.exports = status
