const Discord = require('discord.js');
const client = new Discord.Client();
const { Collection } = require('mongoose');
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
                if (args.length < 3)
                {
                    message.channel.send('🤖  **Il manque des arguments**');
                    return;
                }
                if (parseInt(args[2], 10))
                {
                    if (parseInt(args[2], 10) <= 0)
                    {
                        message.channel.send('🤖  **Le nombre ne peux pas être inférieur ou egal à 0**');
                        return;
                    }
                    data_user._user[i].stars += parseInt(args[2], 10);
                    message.channel.send('🤖  **Le membre a gagné '+ args[2] +' :stars: !**');
                } else {
                    message.channel.send('🤖  **Chiffre incorrect !**');
                    return;
                }
                return;
            }
        }
    } else
    message.channel.send('🤖  **Vous avez oublié de mentionner le membre !**');
}
exports.fun_add_stars_to_users = fun_add_stars_to_users;