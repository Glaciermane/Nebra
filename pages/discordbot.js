const Discord = require('discord.js');

const bot = new Discord.Client();
const token = config.token;
const channelId = '1101111620215779368';

bot.login(token);

bot.on('ready', () => {
  console.log('Bot is ready');
});

function sendDiscordMessage(message) {
  const channel = bot.channels.cache.get(channelId);
  if (channel) {
    channel.send(message);
  } else {
    console.log('Channel not found');
  }
}

// Diese Funktion kann aufgerufen werden, um die Benachrichtigung zu senden
function sendNotificationToDiscord(name, discordName, tier, message) {
  const notificationMessage = `New rank request!\n\nIngame Name: ${name}\nDiscord Name: ${discordName}\nTier: ${tier}\nNachricht: ${message}`;
  sendDiscordMessage(notificationMessage);
}

module.exports = {
  sendNotificationToDiscord
};
