const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json') 

  client.on('message', async message => {
	if (message.content === '!befehle') {
		await message.reply('die befehle gibt es alles');
	} else if (message.content === '!join') {
		await message.reply('nein');
	} else if (message.content === '!left') {
		await message.reply('kann ich nicht');
	} else if (message.content === '!start') {
		await message.reply('ich kann es nicht');
	} else if (message.content === '!stop') {
		await message.reply('gerne');
	} else if (message.content === '!next') {
		await message.reply('ich möchte das hören');
	}
});
async function play(voiceChannel) {
	const connection = await voiceChannel.join(860134301551296532);
	connection.play('audio.mp3');
}


client.login(config.token);
 
