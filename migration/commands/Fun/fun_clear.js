const Discord = require('discord.js');

async function fun_clear(message, client) {
    let fetched;
    let take_channel;
    take_channel = await client.channels.cache.find(elem => elem.id == '833027470667546634');
    //take_channel.bulkDelete(fetched);
    //const fetched = await message.channel.cache.fetchMessages({limit: 99});
    //message.channel.bulkDelete(fetched);
}
exports.fun_clear = fun_clear;