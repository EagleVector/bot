const { Client, GatewayIntentBits } = require("discord.js");

// Guilds gives us the control over interaction of the bot.

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Message Create

client.on('messageCreate', message => {
  if (message.author.bot) {
    return;
  }
  // console.log(message.content);
  console.log(message);
  message.reply({
    content: 'Hi From Bot'
  });
});

// Interaction

client.on('interactionCreate', interaction => {
  console.log(interaction);
  interaction.reply('Pong!!')
})

client.login(
  "MTEyNjUxMTA2MzY4MTIyNDg0Ng.GYA6Vt.BkubxSpylqW0qdZJZGvoxyp06ZlCedyoRXBOYw"
)