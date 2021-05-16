const Discord = require('discord.js');
const data_syst = require('../../../data/structjson/all_systeme.json');
const { fun_index_users } = require('../../Fun/fun_index_users');
const data_user = require('../../../data/structjson/user.json');
const data_ins = require('../../../data/structjson/inscription.json');
async function fun_channel_tuto_argument(message, command) {
    let index_user = fun_index_users(message.member.id);
    if (command.length < 2)
        return (message.channel.send("🤖 **Ta commande doit comporter au minimum deux arguments pour marcher**"));
    if (command[0].toUpperCase() != '!GPALU') {
        return (message.channel.send("🤖 **Ta commande n'est pas :** \n\
> **"+ command[0] +"\n\
__Mais celle-ci :__\n\
> **!GPALU**"));
    } else if (!parseInt(command[1]))
        return (message.channel.send("🤖 **Ton deuxième arguments doit-être un nombre !**"));
    if (command.length > 2) {
        let nmsg = "";
        for (let i = 2; i < command.length; i++)
            nmsg += command[i] + ' '; 
        for (let i = 0; i < data_ins._register.length; i++){
            if (data_ins._register[i].delete_statue == false && data_ins._register[i].idusr == message.member.id) {
                data_ins._register[i].usrmsg = nmsg;
                break 
            }
        }
    }
    data_user._user[index_user].tuto_rang = await data_syst.roles_tuto_9_id;
    await message.member.roles.remove(data_syst.roles_tuto_8_id);
    await message.member.roles.add(data_syst.roles_tuto_9_id);
    let nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_demarrage_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
}
exports.fun_channel_tuto_argument = fun_channel_tuto_argument;