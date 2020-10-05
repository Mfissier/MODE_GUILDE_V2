const Discord = require('discord.js');
const client = new Discord.Client();

function help(message)
{
    args = message.content.split(/ +/g);
    if (!args[1])
        message.channel.send('Commandes disponibles:\n\n> **!NEW_GUILD**\n!help + nom de la command pour en savoir plus !');
    else if(args[1].toUpperCase() == '!NEW_GUILD' || args[1].toUpperCase() == 'NEW_GUILD')
        message.channel.send('**__La command !NEW_GUILD permet de creer une nouvelle guilde :__**\n\n\
        Cette command à plusieurs arguments\n**1:** Le nom de la guilde\n**2:** Le Meneur\n**3:** Le serveur\n**4:** Le nombre de kamas que possède le coffre\n\n\
        __Exemple :__\n\
        > !NEW_GUILD GUILDE @nom_du_meneur illyzael 989343');
}

exports.help = help;    