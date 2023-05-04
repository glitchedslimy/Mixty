import { client } from '../../index'
import { CommandInteractionOptionResolver, Interaction } from 'discord.js'
import { ExtendedInteraction } from 'slimedcommands'

module.exports = {
  event: 'interactionCreate',
  once: false,
  run: async (interaction: Interaction) => {
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName)
      if (!command) {
        return interaction.reply(`This command was not found.`)
      }
      if (command.developer && interaction.user.id != '372840998918684672') {
        return interaction.reply({
          content: `This command is only for the developer.`,
          ephemeral: true,
        })
      }
      command.run({
        args: interaction.options as CommandInteractionOptionResolver,
        client,
        interaction: interaction as ExtendedInteraction,
      })
    }
  },
}
