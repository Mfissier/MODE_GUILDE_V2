const Discord = require('discord.js');
const data_guild = require('../../../data/structjson/guild.json');
const { fun_index_guild } = require('../../Fun/fun_index_guild');
const data_user = require('../../../data/structjson/user.json');
const data_syst = require('../../../data/structjson/all_systeme.json');

async function fun_guild_delete(message, command, client)
{
    let channel_d;
    let index_guild;
    //SECONDE FONCTION QUI FAIT TOUT BUG <<<<=====
    try{
        if (command[1] == undefined)
            return (message.channel.send('!Vous n\'avez pas mis le nom de la guilde !'));
        index_guild = await fun_index_guild(command[1]);
        if (index_guild == -1)
            return (message.channel.send('!Je n\'ai pas trouvé cette guilde !')); 
        data_guild._guild[index_guild].delete_statue = true;

        // channel_d = await message.guild.channels.cache.find(Collection => Collection.id == data_guild._guild[index_guild].channel_staff_mission_id);
        // channel_d.delete();
        // channel_d = await message.guild.channels.cache.find(Collection => Collection.id == data_guild._guild[index_guild].channel_staff_logs_id);
        // channel_d.delete();
        // channel_d = await message.guild.channels.cache.find(Collection => Collection.id == data_guild._guild[index_guild].channel_Report_logs_id );
        // channel_d.delete();
        // channel_d = await message.guild.channels.cache.find(Collection => Collection.id == data_guild._guild[index_guild].channel_cmd_id );
        // channel_d.delete();
        // channel_d = await message.guild.channels.cache.find(Collection => Collection.id == data_guild._guild[index_guild].chat_staff_id);
        // channel_d.delete();
        // channel_d = await message.guild.channels.cache.find(Collection => Collection.id == data_guild._guild[index_guild].Vocal_staff_id);
        // channel_d.delete();
        // channel_d = await message.guild.channels.cache.find(Collection => Collection.id == data_guild._guild[index_guild].channel_discussion_id );
        // channel_d.delete();
        // channel_d = await message.guild.channels.cache.find(Collection => Collection.id == data_guild._guild[index_guild].Categorie_guild_id);
        // channel_d.delete();
        await client.guilds.cache.find(Guild => Guild.roles).roles.cache.find(roles => roles.id === data_guild._guild[index_guild].rolemeneur).delete();
        await client.guilds.cache.find(Guild => Guild.roles).roles.cache.find(roles => roles.id === data_guild._guild[index_guild].brasdroit).delete();
        await client.guilds.cache.find(Guild => Guild.roles).roles.cache.find(roles => roles.id === data_guild._guild[index_guild].conseiller).delete();
        await client.guilds.cache.find(Guild => Guild.roles).roles.cache.find(roles => roles.id === data_guild._guild[index_guild].guild).delete();    
        let user_guild;
        for (let i = 0; i < data_user._user.length; i++) {
            if (data_user._user[i].rang_guild == data_guild._guild[index_guild].guild) {
                user_guild = await message.guild.members.cache.find(elem => elem.id == data_user._user[i].id)
                user_guild.roles.remove(data_syst.RANG_COALITION_ID);
            }
        }
    } catch (error) {
        console.error(error);   
    }   
}
exports.fun_guild_delete = fun_guild_delete;