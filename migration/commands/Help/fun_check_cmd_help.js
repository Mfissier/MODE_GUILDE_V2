const Discord = require('discord.js');

async function fun_check_cmd_help(message, command) {
    message.channel.send('🤖 Indisponible pour le moment :cry:');
    
    switch(command[0].toUpperCase()) {
    }
}
exports.fun_check_cmd_help = fun_check_cmd_help;