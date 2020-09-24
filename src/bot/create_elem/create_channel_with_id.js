const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("../bot");

// async function fun_take_new_channel_with_id_in_data(message, txt){

// 	console.log("Aaaaaaa");
// 	new_channel_id = 0;
// 	try {
// 		//await console.log(message.guild.channels.find(channel => channel.name === "channel-name"));
// 		new_channel_id = await message.guild.channels.find(channel => channel.name === txt);
// 		return await new_channel_id;
// 		//récupérer l'id du channel et le mettre dans la data_base.
// 	} catch (e) {
//         console.error(e);
//     }
// }

async function create_channel_with_id(message) {
    args = message.content.split(/ +/g);
	//Rajouter la fonction crete channel depuis blot(client);
	//Enregistrer les donnés dans mongo.js
	//Faire en sorte que dans txt le channel n'est pas le même nom.
	//En mettant un système d'émoticone.

    new_channel_id = 0;
	try {
		// args = message.content.split(/ +/g);
		// var server = message.guild;
		// var name = message.author.username;
		// server.createChannel(name, "text");
		await message.guild.channels.create(args[1], { reason: 'Needed a cool new channel' })
        //new_channel_id = await	fun_take_new_channel_with_id_in_data(message);
        	// DATA_BASE ; Enregistré new_channel_id;
		await message.channel.send('My Master <@' + message.member.id +'> a tenter de creer un channel !');
		await console.log(client.channels.cache.map(Collection => Collection));
		return await (args[1]);
		// ajouter de nouveaux canaux.
		// Add fonction pour ajouter des rang avec certain droit.
	} catch(e) {
		console.error(e);
    }

}
exports.create_channel_with_id = create_channel_with_id;


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