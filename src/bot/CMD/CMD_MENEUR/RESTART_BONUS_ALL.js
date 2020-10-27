const Discord = require('discord.js');
const client = new Discord.Client();
<<<<<<< HEAD
const { Collection } = require('mongoose');
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function RESTART_BONUS_ALL(message)
{
    args = message.content.split(/ +/g);

        for (let i =0 ; i < data_user._user.length; i++)
        {
<<<<<<< HEAD
            data_user._user[i].like_bonus = false;
            data_user._user[i].like_status = false;
            data_user._user[i].vocal_status = false;

        }
    message.channel.send('🤖  ** Tous les membres ont leurs bonus à zero!**');
}
=======
                    data_user._user[i].like_bonus = false;
                    data_user._user[i].like_status = false;
                    data_user._user[i].vocal_status = false;
                    console.log(data_user._user[i].like_status);
                message.channel.send('Les utilisateurs ont leurs bonus à zero');
        }
    }
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165



exports.RESTART_BONUS_ALL = RESTART_BONUS_ALL;