const Discord = require('discord.js');
const client = new Discord.Client();

async function channel_all_delete(message)
{
    args = message.content.split(/ +/g);
    //message.guild.channels.cache.find(Collection => Collection.name == name_of_guild);
    var tab = await message.guild.channels.cache.map(Collection => Collection.name);
  //  console.log(tab[1]);
   // console.log(tab.length);
    for(let i = 0; i < tab.length; i++)
    {
        name_of_guild = await message.guild.channels.cache.find(Collection => Collection.name == tab[i]);
        if (tab[i] != 'général')
        {
            await name_of_guild.delete();
        }
    }
    message.channel.send('__COMMAND ADMIN__ : **Tout les channels ont été supprimés !**');
    //await message.guild.channels.create("canal_general", { reason: 'Nouveau channel pour la guilde' + name_of_guild});
}

  exports.channel_all_delete = channel_all_delete;

