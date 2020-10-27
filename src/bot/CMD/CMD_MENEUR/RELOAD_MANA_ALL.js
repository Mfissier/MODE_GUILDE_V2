const Discord = require('discord.js');
const client = new Discord.Client();
<<<<<<< HEAD
const { Collection } = require('mongoose');
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function RELOAD_MANA_ALL(message)
{
    args = message.content.split(/ +/g);

        for (let i =0 ; i < data_user._user.length; i++)
        {
<<<<<<< HEAD
            data_user._user[i].mana = parseInt(data_user._user[i].mana_max);
        }
    message.channel.send('🤖  **Le mana a été réinitialisé pour l\'ensemble des membres !**');
}
=======
                    data_user._user[i].mana = parseInt(data_user._user[i].mana_max);
                    console.log(data_user._user[i].mana);
                message.channel.send('Les utilisateurs ont retrouvé leurs points de Mana');
        }
    }
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165



exports.RELOAD_MANA_ALL = RELOAD_MANA_ALL;