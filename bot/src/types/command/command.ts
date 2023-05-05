import {
  Client,
  CommandInteraction,
  CommandInteractionOptionResolver,
} from 'discord.js'

export interface Command {
  name: string
  description: string
  run: (
    { interaction }: { interaction: CommandInteraction },
    args?: CommandInteractionOptionResolver,
    client?: Client
  ) => Promise<void>
}
