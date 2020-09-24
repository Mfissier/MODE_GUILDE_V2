const Discord = require('discord.js');
const client = new Discord.Client();

function help(message)
{
    args = message.content.split(/ +/g);
    if (!args[1])
        message.channel.send('Commandes disponibles:\n\n> **!GUILDE_CREATE**\n!help + nom de la command pour en savoir plus !');
    else if(args[1].toUpperCase() == '!GUILDE_CREATE' || args[1].toUpperCase() == 'GUILDE_CREATE')
        message.channel.send('**__La command !GUILDE_CREATE permet de creer une nouvelle guilde :__**\n\nCette command à plusieurs arguments\n**1:** Le nom de la guilde\n**2:** Le Meneur\n**3:** Le serveur\n**4:** Le nombre de kamas que possède le coffre\n__Exemple :__\n> !GUILDE_CREATE GUILDE @nom_du_meneur illyzael 989343');
}

exports.help = help;    