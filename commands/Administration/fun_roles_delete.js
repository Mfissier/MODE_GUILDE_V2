const Discord = require('discord.js');
const { fun_sleep } = require('../Fun/fun_sleep');
//const client = new Discord.Client();

async function fun_roles_delete(message, command, client) {
    args = message.content.split(/ +/g);
    ALL_ROLES = await client.guilds.cache.find(Guild => Guild.roles).roles.cache.map(roles => roles.id);
    try {    
        for(let i = 0; i < ALL_ROLES.length; i++) {
            if (ALL_ROLES[i] == '836605462894870550' || ALL_ROLES[i] == '836605300488011799' || ALL_ROLES[i] == '832652103104987137' || ALL_ROLES[i] == '771703765043904542') {
                //console.log('Rang check');
            } else {
                await client.guilds.cache.find(Guild => Guild.roles).roles.cache.find(roles => roles.id === ALL_ROLES[i]).delete();
                fun_sleep(150);
            }       
        }
    message.channel.send('🤖 __COMMAND ADMIN__ : **Tout les rangs ont été supprimés !**');
    } catch(e) {
        console.error(e);
    }
}
exports.fun_roles_delete = fun_roles_delete;