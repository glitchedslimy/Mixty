import { CommandInteraction } from 'discord.js'

module.exports = {
  name: 'ping',
  description: 'Ping!',
  run: async ({ interaction }: { interaction: CommandInteraction }) => {
    await interaction.reply('Pong!')
  },
}
