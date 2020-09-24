const Discord = require('discord.js');
const { Collection } = require('mongoose');
const client = new Discord.Client();
data_user = require('../bot/data/structjson/user.json');
data_guilde = require('../bot/data/structjson/guild.json');

async function test(message)
{


  //console.log(data_user._user[ 0]);
  let new_object = Object.assign({},data_user._user[0]);
  data_user._user.push(new_object);
  new_object = Object.assign({},data_user._user[0]);
  data_user._user.push(new_object);
  data_user._user[2].id = '12334534476';
  console.log(data_user._user[2]);
  //data_user._user.push(data_user._user[0]);
  //data_user._user[0].id = '123';
  //console.log(data_user._user[1]);
    //console.log(data_user._user[0]);

    //data_user._user[1] = assign(data_user._user[0], data_user._user[1]);

    
}



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



exports.test = test;

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