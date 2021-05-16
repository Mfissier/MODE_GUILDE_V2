const Discord = require('discord.js');
const data_tuto = require('../structjson/tutoriel.json');
var fs = require('fs');
async function fun_save_tuto()
{
    let path = await __dirname + '/../Save/tuto/' ;
    fs.writeFileSync(path + 'tuto_statue.txt', data_tuto.tuto_statue.toString(), (err) => { if (err)console.log("An error happened");});
    fs.writeFileSync(path + 'id_msg_welcome.txt', data_tuto.id_msg_welcome.toString(), (err) => { if (err)console.log("An error happened");});
    fs.writeFileSync(path + 'id_guild.txt', data_tuto.id_guild.toString(), (err) => { if (err)console.log("An error happened");});
    fs.writeFileSync(path + 'name_guild.txt', data_tuto.name_guild.toString(), (err) => { if (err)console.log("An error happened");});
}
exports.fun_save_tuto = fun_save_tuto;