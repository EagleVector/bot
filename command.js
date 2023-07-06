// Registering Custom Commands 

const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!"
  }
];

const rest = new REST({ version: "10" }).setToken(
  "MTEyNjUxMTA2MzY4MTIyND****************************oxyp06ZlCedyoRXBOYw"
  );

(async () => {
  try {
    console.log('Started refreshing application (/) commands');

    await rest.put(Routes.applicationCommands("1************1224846"), { body: commands });

    console.log("Successfully reloaded application (/) commands");
  } catch (error) {
    console.log(error);
  }
})();
