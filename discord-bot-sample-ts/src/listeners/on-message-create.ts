import { Client } from 'discord.js';

export const onMessageCreate = (client: Client) => {
  client.on('messageCreate', async (msg) => {
    if (msg.author.bot) {
      return;
    }

    const content = msg.content.toLowerCase();

    if (content === 'ping') {
      await msg.reply(`${msg?.member?.displayName||msg?.author?.displayName||""} : pong`);
    }
  });
};
