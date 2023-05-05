import {
  ApplicationCommandOption,
  CommandInteraction,
  CommandInteractionOptionResolver,
  PermissionResolvable,
} from 'discord.js'
import { SlimedClient } from 'slimedcommands'

export interface Command {
  name: string
  description: string
  hasSubcommand?: boolean
  permissions?: PermissionResolvable[]
  defaultMemberPermissions?: PermissionResolvable[]
  options?: ApplicationCommandOption[]
  cooldown?: number
  developer?: boolean
  run: ({
    interaction,
    args,
    client,
  }: {
    interaction: CommandInteraction
    args?: CommandInteractionOptionResolver
    client: SlimedClient
  }) => Promise<void>
}
