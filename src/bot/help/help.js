const Discord = require('discord.js');
const client = new Discord.Client();

function help(message)
{
    args = message.content.split(/ +/g);
    if (!args[1])
        message.channel.send('\
        **Commandes disponibles:**\n\n\
> !ADD_BOX_BONUS @mention\n\
> !ADD_LIKE_BONUS @mention\n\
> !ADD_PERCO_USR @mention nbr\n\
> !CHANGE_USR_NAME @mention username\n\
> !DELETE_IMMU_PURG @mention\n\
> !DELETE_PERCO_MAX @mention nbr\n\
> !DELETE_XP @mention nbr\n\
> !RELOAD_MANA_ALL\n\
> !ADD_GRADE @mention nbr\n\
> !ADD_MANA_MAX @mention nbr\n\
> !ADD_USR_IN_GUILD @mention @rang_guild\n\
> !DELETE_BOX_BONUS @mention nbr\n\
> !DELETE_LIKE_BONUS @mention\n\
> !DELETE_PERCO_USR @mention nbr\n\
> !KIK_USR @mention raison\n\
> !RESTART_BONUS_ALL\n\
> !ADD_IMMU_PURGE @mention\n\
> !ADD_PERCO_MAX @mention nbr\n\
> !ADD_XP @mention nbr\n\
> !DELETE_GRADE @mention nbr\n\
> !DELETE_MANA_MAX @mention nbr\n\
> !DELETE_STARS @mention nbr\n\
> !RELOAD_MANA @mention\n\
> !ADD_STARS @mention nbr\n\n\
!help + nom de la command pour en savoir plus !');
    else if(args[1].toUpperCase() == '!ADD_BOX_BONUS' || args[1].toUpperCase() == 'ADD_BOX_BONUS')
    {
        message.channel.send('**!ADD_BOX_BONUS @mention**\n\
        > 🤖  Le membre a le droit a un box gratuite');
    }
    else if(args[1].toUpperCase() == '!ADD_LIKE_BONUS' || args[1].toUpperCase() == 'ADD_LIKE_BONUS')
    {
        message.channel.send('**!ADD_LIKE_BONUS @mention**\n\
        🤖  **Le membre peux like deux fois par jour**');
    }
    else if(args[1].toUpperCase() == '!ADD_PERCO_USR' || args[1].toUpperCase() == 'ADD_PERCO_USR')
    {
        message.channel.send('**!ADD_PERCO_USR @mention nbr**\n\
        🤖  Le membre peux poser x percepteur en plus');
    }
    else if(args[1].toUpperCase() == '!CHANGE_USR_NAME' || args[1].toUpperCase() == 'CHANGE_USR_NAME')
    {
        message.channel.send('**!CHANGE_USR_NAME @mention username**\n\
        🤖  Change le nom de l\'utilisateur');
    }
    else if(args[1].toUpperCase() == '**!DELETE_IMMU_PURG**' || args[1].toUpperCase() == 'DELETE_IMMU_PURG')
    {
        message.channel.send('**!DELETE_IMMU_PURG @mention**\n\
        🤖  Enleve l\'immunite a la purge du membre');
    }
    else if(args[1].toUpperCase() == '!DELETE_PERCO_MAX' || args[1].toUpperCase() == 'DELETE_PERCO_MAX')
    {
        message.channel.send('**!DELETE_PERCO_MAX @mention nbr**\n\
        🤖  Supprimer x perco posable au maximum par le membre');
    }
    else if(args[1].toUpperCase() == '!DELETE_XP' || args[1].toUpperCase() == 'DELETE_XP')
    {
        message.channel.send('**!DELETE_XP @mention nbr**\n\
        🤖  Supprime x pts d\'EXP à ce membre');
    }
    else if(args[1].toUpperCase() == '!RELOAD_MANA_ALL' || args[1].toUpperCase() == 'RELOAD_MANA_ALL')
    {
        message.channel.send('**!RELOAD_MANA_ALL**\n\
        🤖  Restat tout le mana de l\'ensemble des membres');
    }
    else if(args[1].toUpperCase() == '!ADD_GRADE' || args[1].toUpperCase() == 'ADD_GRADE')
    {
        message.channel.send('**!ADD_GRADE @mention nbr**\n\
        🤖  Rajoute X grade à ce membre ');
    }
    else if(args[1].toUpperCase() == '!ADD_MANA_MAX' || args[1].toUpperCase() == 'ADD_MANA_MAX')
    {
        message.channel.send('**!ADD_MANA_MAX @mention nbr**\n\
        🤖  Rajoute X mana max à un membre !');
    }
    else if(args[1].toUpperCase() == '!ADD_USR_IN_GUILD' || args[1].toUpperCase() == 'ADD_USR_IN_GUILD')
    {
        message.channel.send('**!ADD_USR_IN_GUILD @mention @rang_guild**\n\
        🤖   ajoute ce membre à la guilde cité le troisieme argument doit etre le role associé à la guilde');
    }
    else if(args[1].toUpperCase() == '!DELETE_BOX_BONUS' || args[1].toUpperCase() == 'DELETE_BOX_BONUS')
    {
        message.channel.send('**!DELETE_BOX_BONUS @mention nbr**\n\
        🤖  supprime des boxes bonus');
    }
    else if(args[1].toUpperCase() == '!DELETE_LIKE_BONUS' || args[1].toUpperCase() == 'DELETE_LIKE_BONUS')
    {
        message.channel.send('**!DELETE_LIKE_BONUS @mention**\n\
        🤖  Supprime la possiblité à ce membre le faites de pouvoir like deux fois par jour !');
    }
    else if(args[1].toUpperCase() == '!DELETE_PERCO_USR' || args[1].toUpperCase() == 'DELETE_PERCO_USR')
    {
        message.channel.send('**!DELETE_PERCO_USR @mention nbr**\n\
        🤖  Supprimer le nombre de percepteur posable par ce membre');
    }
    else if(args[1].toUpperCase() == '!KIK_USR' || args[1].toUpperCase() == 'KIK_USR')
    {
        message.channel.send('**!KIK_USR @mention raison**\n\
        Kik le membre');
    }
    else if(args[1].toUpperCase() == '!RESTART_BONUS_ALL' || args[1].toUpperCase() == 'RESTART_BONUS_ALL')
    {
        message.channel.send('**!RESTART_BONUS_ALL**\n\
        🤖  Restat tout les bonus de tout les membres (mana, like, etc,...)');
    }
    else if(args[1].toUpperCase() == '!ADD_IMMU_PURGE' || args[1].toUpperCase() == 'ADD_IMMU_PURGE')
    {
        message.channel.send('**!ADD_IMMU_PURGE @mention**\n\
        🤖  Immunise ce membre a la purge');
    }
    else if(args[1].toUpperCase() == '!ADD_PERCO_MAX' || args[1].toUpperCase() == 'ADD_PERCO_MAX')
    {
        message.channel.send('**!ADD_PERCO_MAX @mention nbr**\n\
        🤖  Ajout X nombre max posable par ce membre');
    }
    else if(args[1].toUpperCase() == '!ADD_XP' || args[1].toUpperCase() == 'ADD_XP')
    {
        message.channel.send('**!ADD_XP @mention nbr**\n\
        🤖  Ajout x nombre d\'xp à ce membre !');
    }
    else if(args[1].toUpperCase() == '!DELETE_GRADE' || args[1].toUpperCase() == 'DELETE_GRADE')
    {
        message.channel.send('**!DELETE_GRADE @mention nbr**\n\
        🤖  Supprime x nombre de grade à ce membre !');
    }
    else if(args[1].toUpperCase() == '!DELETE_MANA_MAX' || args[1].toUpperCase() == 'DELETE_MANA_MAX')
    {
        message.channel.send('**!DELETE_MANA_MAX @mention nbr**\n\
        🤖   Supprime X nombre de mana max à ce membre !');
    }
    else if(args[1].toUpperCase() == '!DELETE_STARS' || args[1].toUpperCase() == 'DELETE_STARS')
    {
        message.channel.send('**!DELETE_STARS @mention nbr**\n\
        🤖  Supprime X nombre de :stars: a ce membre');
    }
    else if(args[1].toUpperCase() == '!RELOAD_MANA' || args[1].toUpperCase() == 'RELOAD_MANA')
    {
        message.channel.send('**!RELOAD_MANA @mention**\n\
        🤖  restat le mana du membre cité');
    }
    else if(args[1].toUpperCase() == '!ADD_STARS' || args[1].toUpperCase() == 'ADD_STARS')
    {
        message.channel.send('**!ADD_STARS @mention nbr**\n\
        🤖  Ajout x nombre de :stars: au membre cité !');
    }    
}

exports.help = help;    