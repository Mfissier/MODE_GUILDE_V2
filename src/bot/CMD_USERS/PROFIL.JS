    
const Discord = require('discord.js');
const { Collection } = require('mongoose');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');

  async function PROFIL(message)
{
    args = message.content.split(/ +/g);
    /************************************************************ 
                          SECURITY COMMAND;
    *************************************************************/
    let index_channel = message.channel.id;
    let ok_channel = 0;
    for (let i = 0; i < data_guilde.channel_profil.length; i++)
    {
      if (data_guilde.channel_profil[i] == index_channel)
      {
        ok_channel = 1;
        break;
      }
    }
    if (ok_channel == 0)
    {
      message.channel.send('🤖 **Cette command est utilisable dans le canal 『🎭』profil !**');
      return;
    }
    if (message.mentions.users.first())
    {
      new_player = message.mentions.users.first();
      for (let i = 0; i < data_user._user.length; i++)
      {
          if (data_user._user[i].id == new_player.id)
          {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('WHITE')
            .setTitle(data_user._user[i].username)//
            .setDescription('**🎖️    '+data_user._user[i].grade_discord + '#   ' + data_user._user[i].exp_discord + "/" + data_user._user[i].exp_discord_max + ' xp**')  //data_user._user[i].rang_guild_name
            .setThumbnail(new_player.displayAvatarURL())
            .addFields(
              { name: '⭐  **'+data_user._user[i].stars + '/'+ data_user._user[i].stars_max+ '**', value: '💧  **'+data_user._user[i].mana + '/'  + data_user._user[i].mana_max +'**' },
              { name: '\u200B', value: '\u200B' },
              { name: '🐴  '+data_user._user[i].perco_nbr + '/'+ data_user._user[i].perco_max, value: '**🗡️  ATQ  ' + data_user._user[i].perco_attack_nbr+ '** ', inline: true },
              { name: '**🛡️  DEF  ' + data_user._user[i].perco_defence_nbr+ '**', value: '💰 '+ data_user._user[i].kamas_waiting, inline: false }
            )  
          message.channel.send(exampleEmbed);
          return;
          }
      }
      message.channel.send('⚠️ Cette utilisateur n\'existe pas... ⚠️');
      message.delete();
      return;
    }
    else
    {
           new_player = message.member.user;
      for (let i = 0; i < data_user._user.length; i++)
      {
        if (data_user._user[i].id == new_player.id)
        {
          const exampleEmbed = new Discord.MessageEmbed()
          .setColor('WHITE')
          .setTitle(data_user._user[i].username)//
          .setDescription('**🎖️    '+data_user._user[i].grade_discord + '#   ' + data_user._user[i].exp_discord + "/" + data_user._user[i].exp_discord_max + ' xp**')  //data_user._user[i].rang_guild_name
          .setThumbnail(new_player.displayAvatarURL())
          .addFields(
            { name: '⭐  **'+data_user._user[i].stars + '/'+ data_user._user[i].stars_max+ '**', value: '💧  **'+data_user._user[i].mana + '/'  + data_user._user[i].mana_max +'**' },
            { name: '\u200B', value: '\u200B' },
            { name: '🐴  '+data_user._user[i].perco_nbr + '/'+ data_user._user[i].perco_max, value: '**🗡️  ATQ  ' + data_user._user[i].perco_attack_nbr+ '** ', inline: true },
            { name: '**🛡️  DEF  ' + data_user._user[i].perco_defence_nbr+ '**', value: '💰 '+ data_user._user[i].kamas_waiting, inline: false }
          )  
        message.channel.send(exampleEmbed);
        return;
        }   
      }
      message.channel.send('⚠️ Cette utilisateur n\'existe pas... ⚠️');
      message.delete();
      return;
    }
}

exports.PROFIL = PROFIL;