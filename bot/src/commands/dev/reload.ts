import { Command } from 'bot/src/types/command/command'
import { ApplicationCommandOptionType, PermissionFlagsBits } from 'discord.js'
import { loadCommands } from 'slimedcommands'
const reload: Command = {
  name: 'reload',
  description: 'Reloads all commands and events',
  defaultMemberPermissions: [PermissionFlagsBits.Administrator],
  options: [
    {
      name: 'commands',
      description: 'Reloads all commands',
      type: ApplicationCommandOptionType.Subcommand,
    },
    {
      name: 'events',
      description: 'Reloads all events',
      type: ApplicationCommandOptionType.Subcommand,
    },
  ],
  developer: true,
  run: async ({ interaction, args, client }) => {
    const subcommand = args?.getSubcommand()
    switch (subcommand) {
      case 'commands':
        await loadCommands(client)
        await interaction.reply('Reloaded commands!')
        break
    }
  },
}

module.exports = reload
