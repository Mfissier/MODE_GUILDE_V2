const Discord = require('discord.js');
const { fun_sleep } = require('./fun_sleep');

async function fun_permission_allow_R_H_E(take_channel, role_coa)
{
    fun_sleep(150);
    take_channel.overwritePermissions([{id: role_coa.id, 
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS'],
        deny : ['SEND_MESSAGES'],
        },
]);
}

exports.fun_permission_allow_R_H_E = fun_permission_allow_R_H_E;