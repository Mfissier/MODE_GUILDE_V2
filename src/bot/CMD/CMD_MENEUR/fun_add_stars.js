const Discord = require('discord.js');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function fun_add_stars_to_users(message)
{
    args = message.content.split(/ +/g);
    /************************************************************ 
                          SECURITY COMMAND;
    *************************************************************/
    if (message.mentions.users.first() && args.length > 2)
    {
        let users = await message.mentions.users.first();
        console.log(users.id);
        for (let i = 1; i < data_user._user.length; i++)
        {
            console.log(data_user._user[i].id);
            if (data_user._user[i].id == users.id)
            {
                console.log('des etoiles ont été rajouté');
                //RAJOUTER UN MESSAGE DANS ALL_REWARDS
                data_user._user[i].stars += await parseInt(args[2], 10);
                return;
            }
        }
    }
}
exports.fun_add_stars_to_users = fun_add_stars_to_users;