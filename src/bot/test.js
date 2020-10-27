const Discord = require('discord.js');
const { Collection } = require('mongoose');
const client = new Discord.Client();
data_user = require('../bot/data/structjson/user.json');
data_guilde = require('../bot/data/structjson/guild.json');
mkdir = require('../bot/data/fun_param/mkdir');
data_perco = require('../bot/data/structjson/perco.json');
data_tuto = require('./data/structjson/tutoriel.json');
fs = require('fs');


async function test(message)
{
  for (let i = 0; i < data_user._user.length; i++)
 {
  console.log(data_user._user[i].inscription_donjon);
  console.log(data_user._user[i].username);
  data_user._user[i].inscription_donjon = 0;
  data_user._user[i].donjon_inscription = false;
  }
}
  exports.test = test;

  // all_member = message.guild.members.cache.map(element => element.user);
  // role_veteran = message.guild.roles.cache.find(element => element.name == 'PRESENTATION');
  // console.log(role_veteran);
  // let member_ad;
  // for (let i = 0; i < all_member.length; i++)
  // {
  //     member_ad = await message.guild.members.cache.find(element => element.id == all_member[i].id);
  //     await member_ad.roles.add(role_veteran);
  //     await console.log('ajout du rang presentation');
  // }
    

  // console.log(all_member[0].username);
  // console.log(all_member.length);
  // console.log(message.guild.members.cache.map(element => element.user));


/*

        "" : 0,
        "" : 0,
        "" : 0,
        "boutique_spam" : false,
        "cmd_profil_spam" : false,
        "cmd_stats_spam" : false
  */
   //data_user._user.push(data_user._user[0]);
  //data_user._user[0].id = '123';
  //console.log(data_user._user[1]);
    //console.log(data_user._user[0]);

    //data_user._user[1] = assign(data_user._user[0], data_user._user[1]);

    
/*
          message.channel.send(exampleEmbed)
              .then(msg => msg.react('✅'))
              .then(mReaction => mReaction.message.react('❎'))
              .then(mReaction => {
              // fun stuff here
              message.channel.send('ca marche');
              })
              .catch(console.log);
*/

    //chercher le nom de tout les channels
    //console.log(message.channel.guild.channels.cache.map(Collection => Collection.name));
    
    //Chercher les channels en fonction de l'id d'une categorie
    //channel_test = message.channel.guild.channels.cache.find(ParentID => '754069903798960280');
    //channel_test = message.guild.channels.cache.get('『💻』terminal');
    //console.log(channel_test.id);
    //Liste de tout les channel par leurs id:
  //  search = message.channel.guild.channels.cache.map(Collection => Collection.id);
    //    console.log('' + search[3]);   
      //  console.log(message.guild.channels.cache.find(Collection => Collection.id == search[3]).name);





/*

Liste des différentes commandes :


!CMD SUPER ADMIN :

!Super_admin its me !
Donne l'accès à absolument tout.

!Guilde_create
Permet de creer une guilde

!Create_all_rang :
Permet de creer les rangs de bases.

!Register_guilde 
Permet de sauvegarder une guilde et mettre en place les textes dans les canaux

!channel_all_delete
Permet de supprimer tout les chanels.

!roles_all_delete
Permet de supprimer tout les roles.

!CMD MENEUR

!BANN 
Permet de bann un joueur


*/


/*
   const reactionFilter = (reaction, user) => reaction.emoji.name === '✅';

const embed = new Discord.MessageEmbed({
  title: 'Suggestion by someone',
  description: 'This is a test suggestion. Can you please like it or dislike it :)',
  fields: [{
    name: 'Like:',
    value: '<3'
  }]
});

// add reaction emoji to message
message.channel.send(embed)
  .then(msg => msg.react('✅'))
  .then(mReaction => mReaction.message.react('❎'))
  .then(mReaction => {
    // createReactionCollector - responds on each react, AND again at the end.
    const collector = mReaction.message
      .createReactionCollector(reactionFilter, {
        time: 15000
      });

    // set collector events
    collector.on('collect', r => {
      // immutably copy embed's Like field to new obj
      let embedLikeField = Object.assign({}, embed.fields[0]);

      // update 'field' with new value
      embedLikeField.value = '<3 <3 <3';

      // create new embed with old title & description, new field
      const newEmbed = new Discord.MessageEmbed({
        title: 'CAA CHAAANNNGEEE',
        description: 'This is a test suggestion. Can you please like it or dislike it :)',
        fields: [{
          name: 'Like:',
          value: '<3'
        }]
      });

      // edit message with new embed
      // NOTE: can only edit messages you author
      r.message.edit(newEmbed)
        .then(newMsg => console.log(`new embed added`))
        .catch(console.log);
    });
    collector.on('end', collected => console.log(`Collected ${collected.size} reactions`));
  })
  .catch(console.log);
  */