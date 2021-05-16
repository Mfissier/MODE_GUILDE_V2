const Discord = require('discord.js');
const { fun_save_bot_to_data } = require('../../data/data_recovery/fun_save_bot_to_data');
data_tuto = require('../../data/structjson/tutoriel.json');

async function fun_logout(message, command, client)
{
    data_tuto.tuto_statue = false;
    let take_msg = await message.channel.messages.cache.find(elem => elem.id == data_tuto.id_msg_welcome);
    take_msg.delete();
    fun_save_bot_to_data();
}
exports.fun_logout = fun_logout;