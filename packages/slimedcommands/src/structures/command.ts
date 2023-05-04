import { CommandType } from '../types/command'

export class SlimedCommand {
  constructor(commandOptions: CommandType) {
    Object.assign(this, commandOptions)
  }
}
