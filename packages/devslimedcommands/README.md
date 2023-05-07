# Slimed Commands

This is a handler custom made for my bot [Mixty](https://github.com/reallyslimy/Mixty). But I decided to release it to the public as a NPM package for everyone to have access to easy command handling.

It's made thinking on developers first, so it's easy to use and to understand, as its developer friendly.

It works either in JavaScript and TypeScript, as its a compiled JS packaged from a TypeScript project.

**Important to notice, that this handler doesn't support `legacy` neither `hybrid` commands, it only supports `slash` commands.**

## Some features

- Automatic Event Handling (Interactions)
- Automatic Command Handling (Slash Commands)
- Automatic Subcommand Handling (Slash Commands)
- Helper Interafaces and Functions to develop easier on TypeScript and Javascript.
- Easy to use and to understand.
- Easy to maintain and to scale.
- No configuration needed.
- Easy to customize.

## Installation

To install this package, you can use either `npm`, `yarn` or `pnpm`:

**npm**

```bash
npm install slimedcommands
```

**yarn**

```bash
yarn add slimedcommands
```

**pnpm**

```bash
pnpm add slimedcommands
```

Nothing else is needed.

## Usage

To use this package, you need to import it and initialize it with the client and the options.

### Initializing

```ts
import { SlimedClient } from 'slimedcommands'
import { ActivityType } from 'discord.js'

const client = new SlimedClient({
  token: `Your bot token`,
  botOptions: {
    intents: [`Your bot intents`],
    partials: [`Your bot partials`],
  },
  guildId: `Your guild id`, // For Testing purposes.
  activity: {
    name: `Your activity`,
    type: ActivityType.Playing, // ActivityType is a helper interface from discordjs.
  },
})
client.start()
```

With that you have the bot ready to go, but you need to add the commands, so let's do that.

### Adding Commands

**Create a src/commands folder and add your commands there.**

The structure should be:

```
src/
  commands/
    command1.ts
    command2.ts
    command3.ts
index.ts (or whatever you want)
```

Altho, you can put the commands inside other folders to keep the things a bit more tidy, the handler will do its work with that.

Now, let's make our first command.

```ts
import { ISlimedCommand } from 'slimedcommands'

const ping: ISlimedCommand = {
  name: 'ping',
  description: 'Ping!',
  run: async ({ interaction }) => {
    await interaction.reply('Pong!')
  },
}

module.exports = ping

// The importing of the ISlimedCommand interface is for having autocompletion.
```

And that's all you need to make the whole bot online and working with a simple command.

If you want more advanced commands, you can do subcommands inside each command (separate files) and the command handler will do the work.

## Subcommands

### Structure

```
src/
    commands/
        command/
            command.ts
            subcommand.ts
        command2/
            command2.ts
            subcommand2.ts
```

### Adding commands with subcommands

First we create the command inside our command file.

**In order to detect the subcommand the options should be defined**, as the command handler interpreters this as a subcommand when the type is _SUBCOMMAND_.

```ts
import { ISlimedCommand } from 'slimedcommands'
import { ApplicationCommandOptionType } from 'discord.js'

const ping: ISlimedCommand = {
  name: 'ping',
  description: 'Ping!',
  options: [
    {
      name: 'subping',
      description: 'subping command',
      type: ApplicationCommandOptionType.Subcommand,
    },
  ],
}
```

Now that we have the command defined with the subcommand as an option, we can now do the subcommand.

**We don't need the run function in the command, as the subcommand will handle this later.**

```ts
import { ISlimedSubCommand } from 'slimedcommands'

// ISlimedSubCommand is a helper interface for autocompletion in the subcommands.

const subPing: ISlimedSubCommand = {
  subCommand: 'ping.subping', // [Name of the command].[Name of the subcommand]
  run: async ({ interaction }) => {
    await interaction.reply('Subping!')
  },
}
```

And with that we have defined a subcommand.
