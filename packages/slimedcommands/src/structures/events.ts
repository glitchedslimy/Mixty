import { ClientEvents } from "discord.js";

export class SlimedEvent<Key extends keyof ClientEvents> {
    constructor(
        public event: Key,
        public run: (..args: ClientEvents[key]) => any
    ) {}
}