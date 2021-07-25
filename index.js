const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json') 

  client.on('message', async message => {
	if (message.content === '!befehle') {
		await message.reply('die befehle gibt es alles');

}


client.login(config.token);
 
