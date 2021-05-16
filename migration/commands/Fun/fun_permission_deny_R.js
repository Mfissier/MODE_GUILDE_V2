const Discord = require('discord.js');
const { fun_sleep } = require('./fun_sleep');

async function fun_permission_deny_R(take_channel, role_coa)
{
    fun_sleep(150);
    take_channel.overwritePermissions([{id: role_coa.id, 
        deny : ['VIEW_CHANNEL'],
        },
]);
}

exports.fun_permission_deny_R = fun_permission_deny_R;