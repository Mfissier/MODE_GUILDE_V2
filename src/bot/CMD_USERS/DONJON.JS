const Discord = require('discord.js');
const { Collection } = require('mongoose');
const SEARCH_INDEX_GUILD = require('./SEARCH_INDEX_GUILD.JS');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');
data_donjon = require('../data/structjson/donjon_sys.json');

async function DONJON_DELETE(message, id_insription, id_message, id_creator_donjon)
{
    for (let i = 0; i < data_user._user.length; i++)
    {
        for (let y = 0; y < data_user._user.length; y++)
        {
            if (data_user._user[i].id == id_insription[y])
            {
                if (data_user._user[i].inscription_donjon == 1)
                data_user._user[i].inscription_donjon = 0
                else
                return;
                break;
            }
        }    
    }
    for (let i = 0; i <  data_donjon.donjon.length; i++)
    {
        if (data_donjon.donjon[i].id_creator == id_creator_donjon)
        {
            data_donjon.donjon[i].statue = false;
        }
    }
    
    let new_message = message.channel.messages.cache.find(Collection => Collection.id == id_message);
    if (new_message);
        new_message.edit('**Donjon annulé !** 🤖 ');
}
async function DONJON(message)
{
    let all_mention;
    let args = message.content.split(/ +/g);

    if (args.length < 1)
        message.channel.send('🤖  ** Vous n\'avez mentionné personne pour ce donjon...**');
    if (message.mentions.users.map(ClientUser => ClientUser.id).length != 0 )
    {
        all_mention = message.mentions.users.map(ClientUser => ClientUser.id);
        if (all_mention.find(element => element == message.member.user.id))
        {
            message.channel.send('🤖  ** Pas besoin de vous mentionné ! Je sais qui vous êtes...  :upside_down: **');
            return;
        }
    }
    else    
    {
        message.channel.send('🤖  ** Il y a du avoir une erreur...**');
        return;
    }
    for (let i = 0; i < data_user._user.length; i++)
    {
        for (let y = 0; y < all_mention.length; y++)
        {
            if (data_user._user[i].id == all_mention[y] || message.member.user.id == data_user._user[i].id)
            {
                if (data_user._user[i].inscription_donjon > 0)
                {
                    await message.channel.send('🤖  Un des membres du groupe est déjà inscrits dans un autres donjon !');
                    return;
                }
            }
        }
    }
    for (let i = 0; i < data_user._user.length; i++)
    {
        for (let y = 0; y < all_mention.length; y++)
        {
            if (data_user._user[i].id == all_mention[y] || message.member.user.id == data_user._user[i].id)
                    data_user._user[i].inscription_donjon = 1;
        }
    }
    let Description = [];
    if (data_donjon.donjon.length == 1)
    {
        new_object = Object.assign({},data_donjon.donjon[0]);
        data_donjon.donjon.push(new_object);
    }
    let id_insription = [];
    for (let i = 0; i < all_mention.length; i++)
    {
        Description.push('<@!'+all_mention[i] + '> : [ :x: ]\n'); 
        id_insription.push(all_mention[i]);
    } 
    id_insription.push(message.member.user.id);
    new_object = Object.assign({},data_donjon.donjon[0]);
    data_donjon.donjon.push(new_object);

    data_donjon.donjon[data_donjon.donjon.length - 1].id_inscris =  Object.assign([],all_mention);
    data_donjon.donjon[data_donjon.donjon.length - 1].nbr_on_max =  message.mentions.users.map(ClientUser => ClientUser.id).length + 1;
    data_donjon.donjon[data_donjon.donjon.length - 1].nbr_on = 1;
    data_donjon.donjon[data_donjon.donjon.length - 1].id_creator = message.member.user.id;
    data_donjon.donjon[data_donjon.donjon.length - 1].statue = true;
    let clean_data_donjon = [""];
    data_donjon.donjon[data_donjon.donjon.length - 1].id_inscris_on = Object.assign([], clean_data_donjon);
    
    let sent = await message.channel.send('**UN DONJON A ETE LANCÉ PAR** <@!'+ message.member.user.id +'> \n\
*Si il manque un vote, la récompense sera annulée.*\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n' +Description + '▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
Validation => :white_check_mark:\n\
En attente... => [:x:]');
    let id = sent.id
    n_message = message.channel.messages.cache.find(Collection => Collection.id == id);
    let id_creator_donjon = message.member.user.id;
    data_donjon.donjon[data_donjon.donjon.length - 1].id_message = id;
    await n_message.react("✅");
    setTimeout(DONJON_DELETE, 60000 * 10, message, id_insription, id, id_creator_donjon);
}

exports.DONJON = DONJON;