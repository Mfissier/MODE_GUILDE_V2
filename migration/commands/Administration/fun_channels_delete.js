const Discord = require('discord.js');
const { fun_sleep } = require('../Fun/fun_sleep');
const client = new Discord.Client();


async function fun_channel_deletes(message, command)
{
    var tab = await message.guild.channels.cache.map(Collection => Collection.name);
    if (!tab)
        return;
    for(let i = 0; i < tab.length; i++) {
        name_of_guild = await message.guild.channels.cache.find(Collection => Collection.name == tab[i]);
        if (tab[i] != 'général' && tab[i] != 'manuel-staff') {
            await name_of_guild.delete();
            fun_sleep(150);
        }
    }
    message.channel.send('__COMMAND_SUPER_ADMIN__ : **Tout les channels ont été supprimés !**');
}
exports.fun_channel_deletes = fun_channel_deletes;