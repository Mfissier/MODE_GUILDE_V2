const Discord = require('discord.js');
const client = new Discord.Client();

async function roles_all_delete(message, client)
{
    args = message.content.split(/ +/g);
    
    ALL_ROLES = await client.guilds.cache.find(Guild => Guild.roles).roles.cache.map(roles => roles.id);
    try {

        await console.log(ALL_ROLES);
        for(let i = 0; i < ALL_ROLES.length; i++)
        {
            if (ALL_ROLES[i] == '703925605783175168' || ALL_ROLES[i] == '703926464491552828' || ALL_ROLES[i] == '703637060937973850')
            {
                console.log('Rang check');
            } else
            {
                await client.guilds.cache.find(Guild => Guild.roles).roles.cache.find(roles => roles.id === ALL_ROLES[i]).delete();
            }       
        }
    message.channel.send('__COMMAND ADMIN__ : **Tout les rangs ont été supprimés !**');
    } catch(e) {
        console.error(e);
    }
    // console.log(client);
}

  exports.roles_all_delete = roles_all_delete;

