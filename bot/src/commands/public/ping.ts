import { Command } from 'bot/src/types/command/command'

const ping: Command = {
  name: 'ping',
  description: 'Ping!',
  run: async ({ interaction }) => {
    await interaction.reply('Pong!')
  },
}

module.exports = ping
