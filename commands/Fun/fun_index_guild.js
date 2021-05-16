const Discord = require('discord.js');
const data_guild = require('../../data/structjson/guild.json');

async function fun_index_guild(name, id)
{
    console.log(name.toUpperCase());
    if (id) {
        for (let i = 0; i < data_guild._guild.length; i++) {
            if (data_guild._guild[i].guild == id) {
                return (i);
            }
        }    
    }
    for (let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].name_guild.toUpperCase() == name.toUpperCase()) {
            return (i);
        }
    }
    return (-1);
}
exports.fun_index_guild = fun_index_guild;