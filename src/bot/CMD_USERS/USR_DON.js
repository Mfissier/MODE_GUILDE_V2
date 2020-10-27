const Discord = require('discord.js');
const { Collection } = require('mongoose');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');

async function DON(message)
{
    args = message.content.split(/ +/g);
    /************************************************************ 
                          SECURITY COMMAND;
    *************************************************************/
   let index_channel = message.channel.id;
   let ok_channel = 0;
   let index_channel_guild = 0;
   for (let i = 0; i < data_guilde.channel_général.length; i++)
   {
     if (data_guilde.channel_général[i] == index_channel)
     {
       ok_channel = 1;
       index_channel_guild = i;
       break;
     }
   }
   if (ok_channel == 0)
   {
     message.channel.send('🤖 **Cette command est utilisable dans le canal 『💭』général !**');
     return;
   }
    if (message.mentions.users.first())
    {
        let member_recu = message.mentions.users.first();
        let member_don = message.member.user;
        if (args.length < 3)
        {
            message.channel.send('🤖 **Tu n\'as pas indiqué le nombre d\'étoiles !**');
            return;
        } else
        {
            if (parseInt(args[2], 10))
            {
                console.log('NBR STARS DON ' + parseInt(args[2], 10))
                if (parseInt(args[2], 10) < 1)
                {
                    message.channel.send('🤖 **Tu ne peux pas donné une somme inférieure à 0 étoiles !**');
                    return;
                }
                for (i = 0; i < data_user._user.length; i++)
                {
                    if (data_user._user[i].id == member_don.id)
                    {
                        if (data_user._user[i].stars < parseInt(args[2], 10))
                        {
                            message.channel.send('🤖 **Tu ne peux pas donné autant d\'étoiles !**');
                            return;
                        }
                        for (let x = 0; x < data_user._user.length; x++)
                        {
                            if (data_user._user[x].id == member_recu.id)
                            {
                                message.channel.send('** Le membre <@!'+ member_don.id +'> a donné ' + parseInt(args[2], 10) +' :star: à <@!'+ member_recu.id +'> 🤖**')
                                let channel_n = message.guild.channels.cache.find(Element => Element == data_guilde.channel_all_rewards[index_channel_guild]);
                                if (channel_n)
                                    channel_n.send('** Le membre <@!'+ member_don.id +'> a donné ' + parseInt(args[2], 10) +' :star: à <@!'+ member_recu.id +'> 🤖**');
                                data_user._user[i].stars -= parseInt(args[2], 10);
                                data_user._user[x].stars += parseInt(args[2], 10);
                                return;
                            } 
                        }
                        break;
                    }
                }
            }
        }
    } else {
        message.channel.send('🤖 Tu n\'as mentionné personne !');
        return;
    }   
}

exports.DON = DON;