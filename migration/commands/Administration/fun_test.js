const Discord = require('discord.js');
const data_syst = require('../../data/structjson/all_systeme.json');


async function fun_test(message, command)
{
    if (!(command[1][0] >= '0' && command[1][0] <= '9') &&  command[1][0] != '-') {
        return(message.channel.send("🤖 **Ce n'est pas un nombre !**"));
    }
    return;
    for (let i = 0; i < command[1].length; i++) {
        if (!(command[1][i] >= '0' && command[1][i] <= '9') || !(command[2][i] == '-') && !(command[1][i] == '[') || !(command[1][i] == ']'))
            return(message.channel.send("🤖 **La position que tu as donné est incorrect !**"));
    }
}
exports.fun_test = fun_test;