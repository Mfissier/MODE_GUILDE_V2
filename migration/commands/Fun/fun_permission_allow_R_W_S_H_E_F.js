const Discord = require('discord.js');
const { fun_sleep } = require('./fun_sleep');

async function fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa)
{
    fun_sleep(150);
    take_channel.overwritePermissions([{id: role_coa.id, 
        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS']
        },
]);
}

exports.fun_permission_allow_R_W_S_H_E_F = fun_permission_allow_R_W_S_H_E_F;