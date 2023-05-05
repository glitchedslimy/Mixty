import {
  ActionRowBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} from 'discord.js'

const substatusCommand = {
  subCommand: 'status.substatus',
  run: async ({ interaction, client }: { interaction: any; client: any }) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId('starter')
      .setPlaceholder('Make a selection!')
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel('Bulbasaur')
          .setDescription('The dual-type Grass/Poison Seed Pokémon.')
          .setValue('bulbasaur'),
        new StringSelectMenuOptionBuilder()
          .setLabel('Charmander')
          .setDescription('The Fire-type Lizard Pokémon.')
          .setValue('charmander'),
        new StringSelectMenuOptionBuilder()
          .setLabel('Squirtle')
          .setDescription('The Water-type Tiny Turtle Pokémon.')
          .setValue('squirtle')
      )
    const row = new ActionRowBuilder().addComponents(select)

    await interaction.reply({
      content: 'test',
      components: [row],
    })
  },
}

module.exports = substatusCommand
