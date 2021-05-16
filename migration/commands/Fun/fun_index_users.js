const Discord = require('discord.js');
const { re } = require('mathjs');
const data_user = require('../../data/structjson/user.json');

function fun_index_users(id)
{

    for (let i = 0; i < data_user._user.length; i++){
        if (data_user._user[i].id == id)
            return (i);
    }    
    return (-1);
}
exports.fun_index_users = fun_index_users;
    
    
    
    
    
    