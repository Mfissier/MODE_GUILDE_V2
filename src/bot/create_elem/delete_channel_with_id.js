const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("../bot");
const mongo = require('../../../mongo');
//client.login(config.token);

async function delete_channel_with_id(message)
{
	args = message.content.split(/ +/g);
	//id_channel = args[1].match(/(\d+)/);
	//console.log(id_channel[0]);
	console.log(client.guilds.cache.map());
	// var server = message.channel.guild.get(id_channel[0]); //Check Discord's Help For it
	// server.channels.delete();
}

exports.delete_channel_with_id = delete_channel_with_id;



//EXEMPLE DE CODE 
// async run(msg, args) {
// 	this.client.guilds.array().forEach((guild) => {
// 		let channels = guild.channels.filter((channel) => {
// 			return channel.type === 'text' && channel.permissionsFor(guild.me).has(['VIEW_CHANNEL', 'SEND_MESSAGES']);
// 		});
// 		if (channels.array().length > 0) {
// 			channels = channels.sort((a, b) => {
// 				return a.calculatedPosition - b.calculatedPosition;
// 			}).array();
// 			channels[0].send(args.msg).catch(e => console.error(e));
// 		}
// 	});
// }
// };