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
            if (ALL_ROLES[i] == '758429141795733505' || ALL_ROLES[i] == '758428935582121984' || ALL_ROLES[i] == '757543368502018149')
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

