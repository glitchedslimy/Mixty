import {
  Client,
  CommandInteraction,
  CommandInteractionOptionResolver,
  PermissionResolvable,
} from 'discord.js'

export interface Command {
  name: string
  description: string
  permissions?: PermissionResolvable[]
  cooldown?: number
  developer?: boolean
  run: (
    { interaction }: { interaction: CommandInteraction },
    args?: CommandInteractionOptionResolver,
    client?: Client
  ) => Promise<void>
}
