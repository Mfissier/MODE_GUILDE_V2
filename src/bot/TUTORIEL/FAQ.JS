const Discord = require('discord.js');
const { Collection } = require('mongoose');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_tuto = require('../data/structjson/tutoriel.json');
fs = require('fs');


async function FAQ(message)
{
  let channel_id = message.channel.id;
  let channel_presentation = message.guild.channels.cache.find(Collection => Collection.name == '『📋』faq');;
  if (channel_id == channel_presentation.id)
  {
       if(message.guild.roles.cache.find(Role => Role.name === 'FAQ'))
       {
        role_p = message.guild.roles.cache.find(Role => Role.name === 'FAQ');
        role_f = message.guild.roles.cache.find(Role => Role.name === 'BIENVENU');
        message.member.roles.remove(role_p.id);
        message.member.roles.add(role_f);
       }
  }
}
exports.FAQ = FAQ;