const Discord = require('discord.js');
const { Collection } = require('mongoose');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');

async function BOUTIQUE_BOX(message)
{
    cmd_user = message.member.user;
    id_channel = message.channel.id;
    let args = message.content.split(/ +/g);
    let index_user;
    index_guild = 0;
    let nbr_box = 1;
    for (let i = 0; i < data_guilde.channel_boutique.length; i++)
    {
        if (id_channel == data_guilde.channel_boutique[i])
        {
            index_guild = i;
            break;
            // START !
        }
        index_guild = -1;
    }
    if (index_guild == -1)
        return;
    for (let i = 0; i < data_user._user.length; i++)    
    {
        if (data_user._user[i].id == cmd_user.id)
        {

            if (args.length > 1 && !message.mentions.users.first())
            {
                if (args.length > 1 && !message.mentions.users.first())
                {
                    if(parseInt(args[1], 10)){
                        nbr_box = parseInt(args[1], 10);
                        if (nbr_box > 5)
                            message.channel.send('🤖  Vous ne pouvez pas acheter plus de 5 box en même temps.');
                    }
                    else {
                        if (!message.mentions.users.first())
                        {
                            message.channel.send('!ERROR');
                            nbr_box = 1;
                            return;
                        }
                    }
                }
            }
            if (data_user._user[i].stars < nbr_box)
            {
                message.channel.send('🤖  **Vous n\'avez pas assez de :star: pour acheter cette article !**')
                return;
            }
            break;
        }
    }
    if (message.mentions.users.first())
        cmd_user = message.mentions.users.first();

    for (let i = 0; i < data_user._user.length; i++)
    {
        if (data_user._user[i].id == cmd_user.id)
        {
            index_user = i;
            console.log(args.length);
            if (message.mentions.users.first())
            {
                let member_box = message.member.user;
                for (let x = 0; x < data_user._user.length; x++)
                {
                    if (data_user._user[x].id == member_box.id)
                    {
                        data_user._user[x].stars -= nbr_box;
                        break;
                    }
                }
            } else {
                data_user._user[i].stars -= nbr_box;
            }
            
            let channel_s = message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[index_guild]);
            if (!channel_s)
                return;
            if (message.mentions.users.first())
                channel_s.send('**Le membre <@!' +  message.member.user.id + '> a offert une box à <@!'+ message.mentions.users.first().id + '> !**  ')
                if(parseInt(args[1], 10) && !message.mentions.users.first())
                {
                    for (let x = 0; x < nbr_box; x++)
                        BOX(message, index_user, channel_s);
                    return;
                }
            BOX(message, index_user, channel_s);
            break;
        }
    }
}
async function getRandomInt(max) {
    return await Math.floor(Math.random() * Math.floor(max));
  }
async function BOX(message, index_user, channel_s, index_guild)
{
    random = await Math.round(Math.random() * 68);
    let numero_random = random;
    let nbr_tirage = 1;
    while(random == numero_random)
    {
        random = await Math.round(Math.random() * 68);
        if (random != numero_random)
            break;
        numero_random = random;
    }

    if (random >= 0 && random <= 10) {
        data_user._user[index_user].stars += 3;
        message.channel.send('🤖 **GAIN 3 ⭐ !**'); 
        channel_s.send('<@!'+ data_user._user[index_user].id +'> **GAIN 3 ⭐ !** gràce à la !box?  !');

    } else if (random >= 10 && random <= 20) {
        if (data_user._user.stars - 2 < 0)
        {
            data_user._user[index_user].stars += 1;
            channel_s.send('<@!'+ data_user._user[index_user].id +'> **GAIN 1 ⭐ !** gràce à la !box?  !');
            channel_s.send('<@!'+ data_user._user[index_user].id +'> **GAIN 1 ⭐ gràce à la !box?  ! !**');
        } else {
            data_user._user[index_user].stars -= 2;
            message.channel.send('🤖 **PERTE 2 ⭐ !**');     
            channel_s.send('<@!'+ data_user._user[index_user].id +'> **PERTE 2 ⭐ gràce à la !box?  ! !**');
        }
    } else if (random >= 20 && random <= 35) {
        data_user._user[index_user].exp_discord += 5;
        message.channel.send('🤖 **GAIN 5 XP !**'); 
        channel_s.send('<@!'+ data_user._user[index_user].id +'> **GAIN 5 XP gràce à la !box?  ! !**');
        if (data_user._user[index_user].exp_discord > data_user._user[index_user].exp_discord_max)
        {
            data_user._user[index_user].grade_discord += 1;
            data_user._user[index_user].stars += 1;
            data_user._user[index_user].exp_discord =  data_user._user[index_user].exp_discord - data_user._user[index_user].exp_discord_max;
            data_user._user[index_user].exp_discord_max += 5;
            message.channel.send('🤖 **LEVEL UP + 1 ⭐**'); 
        }

    } else if (random >= 35 && random <= 45) {
        message.channel.send('🤖 **PERTE 5 XP !**'); 
        channel_s.send('<@!'+ data_user._user[index_user].id +'> **PERD 5 XP gràce à la !box?  ! !**');
        data_user._user[index_user].exp_discord -= 5;

    } else if (random >= 45 && random <= 55) {
        data_user._user[index_user].mana += 1;
        message.channel.send('🤖 **Tu viens de gagner 1 💧**'); 
        channel_s.send('<@!'+ data_user._user[index_user].id +'> **GAIN 1 💧 gràce à la !box?  ! !**');
    } else if (random >= 55 && random <= 65) {
        data_user._user[index_user].mana -= 1;
        message.channel.send('🤖 **Tu viens de perdre 1 💧**'); 
        channel_s.send('<@!'+ data_user._user[index_user].id +'> **PERTE 1 💧 gràce à la !box?  ! !**');
    } else if (random >= 65 && random <= 67) {
        data_user._user[index_user].mana += 1;
        data_user._user[index_user].mana_max += 1;
        message.channel.send('🤖 **Tu viens de gagner 1 💧 max **'); 
        channel_s.send('<@!'+ data_user._user[index_user].id +'> **GAIN 1 💧 max gràce à la !box?  ! !**');

    } else if (random >= 67 && random <= 68) {
        if (data_user._user[index_user].perco_nbr > data_user._user[index_user].perco_max)
            BOX(message, index_user, channel_s, index_guild);
        else
        {
            data_user._user[index_user].perco_nbr += 1;
            message.channel.send('🤖 **Tu viens de gagner le dorit de poser un percepteur **'); 
            channel_s.send('<@!'+ data_user._user[index_user].id +'> **Vien de gagner le droit de poser un percepteur gràce à la !box?  ! !**');
            let channel_staf = message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_staff_mission[index_guild]);
            channel_staf.send('<@!'+  data_guilde.staff[index_guild] +'>\n\
> <@!'+ data_user._user[index_user].id +'> doit recevoir le droit de poser un percepteur !')
        }

    } else if (random >= 69 && random <= 71) {
        data_user._user[index_user].purge_exam_rang_status = true;
        message.channel.send('🤖 **Tu viens d\'éviter la prochaine purge **'); 
        channel_s.send('<@!'+ data_user._user[index_user].id +'> **Viens d\'échapper à la purge gràce à la !box?  ! !**');
    } else if (random >= 71 && random <= 73) {
        data_user._user[index_user].purge_exam_rang_status = true;
        message.channel.send('🤖 ** VIVE LA PURGE ! <3 **'); 
        channel_s.send('<@!'+ data_user._user[index_user].id +'> **Un nouveau candidat à la purge gràce à la fameuse !box? !**');
    } 
}
exports.BOUTIQUE_BOX = BOUTIQUE_BOX;