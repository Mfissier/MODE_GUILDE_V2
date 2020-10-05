const Discord = require('discord.js');
const client = new Discord.Client();
data_user = require('../structjson/user.json');
data_guilde = require('../structjson/guild.json');

async function check_for_create_profil(client)
{
    let user_map;
    let new_user;
    let new_object; 

    user_map = client.guilds.cache.find(Collection => Collection.members).members.cache.map(Collection => Collection.id);
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
              new_user = await user_map[i];
              new_object = await Object.assign({},data_user._user[0]);;
              await data_user._user.push(new_object);
              new_user = client.guilds.cache.find(Collection => Collection.members).members.cache.find(Collection => Collection.id == user_map[i].id);
              data_user._user[data_user._user.length - 1].id = await new_user.user.id;
              data_user._user[data_user._user.length - 1].username = await new_user.user.username;
              console.log('Le membre ' +data_user._user[data_user._user.length - 1].username + 'viens d\'etre enregistré');
              break;
            }
        }
    }
}
exports.check_for_create_profil = check_for_create_profil;
