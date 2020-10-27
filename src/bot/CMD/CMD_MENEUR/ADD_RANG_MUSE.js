const Discord = require('discord.js');
const client = new Discord.Client();
const { Collection } = require('mongoose');
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');
data_all_system = require('../../data/structjson/all_systeme.json')

async function ADD_RANG_MUSE(message)
{
    args = message.content.split(/ +/g);
    if (message.mentions.users.first())
    {
        let member_mention = message.mentions.users.first();
        for (let i =0 ; i < data_user._user.length; i++)
        {
            if (data_user._user[i].id == member_mention.id)
            {
                    let role_muse = await message.guild.roles.cache.find(Role => Role.name === "MUSE");
                    console.log(role_muse);
                    if(role_muse)
                    {
                        await   message.member.guild.members.cache.find(Collection => Collection.id === data_user._user[i].id).roles.add(role_muse);
                        data_user._user[i].rang_power = "MUSE";
                    }
                break;
            }
        }
    }
}

exports.ADD_RANG_MUSE = ADD_RANG_MUSE;