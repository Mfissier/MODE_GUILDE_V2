data_user = require('../../data/structjson/user.json');
data_guild = require('../../data/structjson/guild.json');

async function PAYEMENT(message)
{
    let id_channel_send = message.channel.id;
    member_cmd = message.member.user;
    member_mention = message.mentions.users.first();
    index_channel_ok = 0;
    for (let i = 0; i < data_guild.channel_transferts.length; i++)
    {
        if (data_guild.channel_transferts[i] == id_channel_send)
        {
            index_channel_ok = 1;
            if (member_mention)
            { 
                for (let y = 0; y < data_user._user.length; y++)
               {
                   if (data_user._user[y].id == member_mention.id)
                   {
                       if (data_user._user[y].kamas_waiting > 0)
                       {
                            data_guild.coffre_guild[i] -= data_user._user[y].kamas_waiting;
                            data_guild.star_to_kamas[i] += data_user._user[y].kamas_waiting;
                            message.channel.send('**Le membre <@!'+ member_mention.id +'> à bien reçu sa récompense de ' + data_user._user[y].kamas_waiting + ' kamas !**');
                            let channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_finances[i]);
                            if (channel_n)
                            {
                                channel_n.send('**Le membre <@!'+ member_mention.id +'> à bien reçu sa récompense de ' + data_user._user[y].kamas_waiting + ' kamas !**');
                            }
                            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_finances[i]);
                            if (channel_n)
                            {
                                channel_n.send('**Le membre <@!'+ member_mention.id +'> à bien reçu sa récompense de ' + data_user._user[y].kamas_waiting + ' kamas !**');
                                channel_n.send('**Coffre de guilde - ' + data_user._user[y].kamas_waiting +' kamas !**')
                                channel_n.send('!DISPLAY_FINANCE 🤖');
                            }
                            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_all_rewards[i]);
                            if (channel_n)
                            {
                                channel_n.send('**Le membre <@!'+ member_mention.id +'> à bien reçu sa récompense de ' + data_user._user[y].kamas_waiting + ' kamas !**');
                            }
                            data_user._user[y].kamas_waiting = 0;
                       } else {
                           message.channel.send('🤖 **Ce membre n\'a aucune récompense en attente !**');
                       }
                       break;
                   }
               } 
            } else {
                message.channel.send('🤖 **Chef tu as oublié de mentionner le membre !**');
            }
            break;
        }
    }
    if (index_channel_ok == 0)
        message.channel.send('🤖 **Cette command est autorisé dans le canal 『💱』transferts**');
}
exports.PAYEMENT = PAYEMENT;