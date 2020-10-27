const Discord = require('discord.js');
const { Collection } = require('mongoose');
const SEARCH_INDEX_GUILD = require('./SEARCH_INDEX_GUILD.JS');
const GESTION_GRADE = require('./GESTION_GRADE.JS');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');


async function getRandomInt(max) {
    return await Math.floor(Math.random() * Math.floor(max));
  }
async function STOLE_STARS(message)
{
    args = message.content.split(/ +/g);
    /************************************************************ 
                          SECURITY COMMAND;
    *************************************************************/
   let index_channel = message.channel.id;
   let ok_channel = 0;
   for (let i = 0; i < data_guilde.channel_général.length; i++)
   {
     if (data_guilde.channel_général[i] == index_channel)
     {
       ok_channel = 1;
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
        let new_player = message.mentions.users.first();
        let voleur = message.member.user;
        let index_voleur = 0;


        while (data_user._user[index_voleur])
        {
            if (data_user._user[index_voleur].id == voleur.id)
                break;
            index_voleur++;
        }
        if (data_user._user[index_voleur].cheat >= 2 || data_user._user[index_voleur].cheat <= -2)
        {
                message.channel.send('🤖 Plus de vole pour toi <@!'+ data_user._user[index_voleur].id + '>, désolé :pirate_flag:');
                return;
        }
        for(let i = 1; i < data_user._user.length; i++)
        {
            if (data_user._user[i].id == new_player.id)
            {
                random = await getRandomInt(4);
                console.log(random);
                if (data_user._user[i].stars < 1)
                {
                    message.channel.send('🤖 **Ce membre n\'a pas assez d\'étoiles**');
                    return;
                }
                if (random >= 2)
                {
                    console.log(data_user._user[i].stars);
                    data_user._user[i].stars -= 1;
                    data_user._user[index_voleur].stars += 1;
                    data_user._user[index_voleur].cheat += 1;
                    message.channel.send('🤖 **Vol réussi** ! + 1 ⭐\nLe membre <@!'+ new_player.id +'> perd 1 ⭐');
                    GESTION_GRADE.GESTION_GRADE(data_user._user[index_voleur].id, 2, message);
                    return;
                }
                else
                {
                    console.log(data_user._user[i].stars);
                    data_user._user[i].stars += 1;
                    data_user._user[index_voleur].stars -= 1;
                    data_user._user[index_voleur].cheat -= 1;
                    console.log('cheat = ' + data_user._user[index_voleur].cheat);
                    message.channel.send('🤖 **ECHEC CRITIQUE** ! - 1 ⭐\nLe membre <@!'+ new_player.id +'> gagne 1 ⭐ !');
                    GESTION_GRADE.GESTION_GRADE(data_user._user[i].id, 2, message);
                    return;
                }
            }
        }
    }
}

exports.STOLE_STARS = STOLE_STARS;