const Discord = require('discord.js');
const { fun_sleep } = require('./fun_sleep');

async function fun_permission_vocal_allow_R_S(take_channel, role_coa)
{
    fun_sleep(150);
    take_channel.overwritePermissions([{id: role_coa.id, 
        allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK', 'USE_VAD']
        },
]);
}

exports.fun_permission_vocal_allow_R_S = fun_permission_vocal_allow_R_S;