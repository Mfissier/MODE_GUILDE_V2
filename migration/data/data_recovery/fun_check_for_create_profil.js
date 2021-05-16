const { index } = require('mathjs');
const data_user = require('../structjson/user.json');

async function fun_check_for_create_profil(client, id)
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
              new_object = Object.assign({}, data_user._user[0]);;
              data_user._user.push(new_object);
              new_user = await client.users.cache.find(Collection => Collection.id == user_map[i]);
              console.log(new_user);
              data_user._user[data_user._user.length - 1].id = await new_user.id;
              data_user._user[data_user._user.length - 1].username = await new_user.username;
              console.log('Le membre ' +data_user._user[data_user._user.length - 1].username + ' viens d\'etre enregistré');
              console.log('Le membre ' +data_user._user[data_user._user.length - 1].id + ' viens d\'etre enregistré');
              break;
            }
        }
    }

}
exports.fun_check_for_create_profil = fun_check_for_create_profil;