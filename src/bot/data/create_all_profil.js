const Discord = require('discord.js');
const { Collection } = require('mongoose');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');

async function create_all_profil(message)
{
    let user_map;
    let new_user;
    let new_object; 

    user_map = message.guild.members.cache.map(Collection => Collection.id);
    for (let i = 0; i < user_map.length; i++)
    {
        for (let y = 0; y < data_user._user.length; y++)
        {
            if (y == 0 && data_user._user.length > 1)
              y = 1;
            if (data_user._user[y].id == user_map[i])
            {
                console.log('utilisateur existe deja');
                break;
            }
            if (y == data_user._user.length - 1)
            {
              new_user = await  user_map[i];
              new_object = await Object.assign({},data_user._user[0]);
              await data_user._user.push(new_object);
              new_user = message.guild.members.cache.find(Collection => Collection.id == user_map[i]);
              data_user._user[data_user._user.length - 1].id = await new_user.user.id;
              data_user._user[data_user._user.length - 1].username = await new_user.user.username;
              data_user._user[data_user._user.length - 1].avatar = await new_user.user.avatar;
              data_user._user[data_user._user.length - 1].stars = await 0;
              data_user._user[data_user._user.length - 1].rang_guild = "765135892913717299";
                
              break;
            }
        }
    }
    for (let i = 0; i < data_user._user.length; i++)
    {
        console.log('..=>' + data_user._user[i].username);
    }
}
exports.create_all_profil = create_all_profil;
