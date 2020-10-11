const Discord = require('discord.js');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function ADD_USR_IN_GUILD(message)
{
    args = message.content.split(/ +/g);
    if (message.mentions.users.first())
    {
        let member_mention = message.mentions.users.first();
        let index_member_mention = 0;
        let mention_rang;
        let index_guild;
        while(data_user._user[index_member_mention])
        {
            if (data_user._user[index_member_mention].id == member_mention.id)
                break;
            index_member_mention++;
        }
        console.log(data_user._user[index_member_mention].id);
        if (args.length <= 2)
        {
            message.channel.send('🤖 **ERROR : Il manque des arguments !**');
            return;
        }
        if (!data_user._user[index_member_mention].id || !member_mention)
            return;
        console.log(args);
        if (args[2].startsWith('<@&') && args[2].endsWith('>')) {
            mention_rang = args[2];
            mention_rang = mention_rang.slice(3, -1);
            if (message.guild.roles.cache.find(Role => Role.id === mention_rang)) {
                mention_rang = message.guild.roles.cache.find(Role => Role.id === mention_rang);
                index_guild = SEARCH_INDEX_GUILD.SEARCH_INDEX_GUILD(mention_rang.id);
                if (index_guild == -1)
                    return;
                await   message.member.guild.members.cache.find(Collection => Collection.id === member_mention.id).roles.add(mention_rang);
                data_user._user[index_member_mention].rang_guild = mention_rang.id;
                message.channel.send('🤖 **L\'utilisateur<@!' +data_user._user[index_member_mention].id+ '> a bien été ajouté dans la guilde : <@&'+ mention_rang.id +'> !**' )
            }    
        } else {
            message.channel.send('🤖 **ERROR : Le rang n\'est pas une mention @ !**');
            return;
        }
            
        
    }
}

exports.ADD_USR_IN_GUILD = ADD_USR_IN_GUILD;