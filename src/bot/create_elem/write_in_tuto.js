const Discord = require('discord.js');
const client = new Discord.Client();
data_guild = require('../data/structjson/guild.json');
const fs = require('fs');
const bot = require('../bot');
let all_channels;
async function write_in_tuto(message)
{
    let channel_n;
    channel_n = message.guild.channels.cache.find(Collection => Collection.name == '『📋』présentation');
    //channel_n.setTopic('');
    //channel_n.send('')
    channel_n = message.guild.channels.cache.find(Collection => Collection.name == '『📋』faq');
channel_n.send('On vous explique..\n\n\
La guilde a une gestion particulière.\n\
Elle est gérée par des "hauts rangs", le meneur, le bras-droit et le conseiller.\n\
Chacun des membres de la guilde doit remplir un rôle et bien entendu, tout est récompensé !\n\n\
> Comment ?\n\
Un système a été mis en place afin de générer des kamas, pour faire prospérer la guilde et vous permettre de jouer sereinement en aidant les autres !\n');
channel_n.send('**Il n\'est pas questions d\'argent réel, d\'ailleurs :**\n\
**__Le troc kamas/argent est interdit ici !__**\n\
:black_small_square:\n\
:black_small_square:\n\
:white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square:\n\
:black_small_square:\n\
:black_small_square:\n\
**『:medal:RANGS ?』**\n\
:black_small_square:\n\
*Chacun a son rôle à jouer !*\n');
channel_n.send('```Il existe plusieurs rangs, recruteur, chasseur de trésor, espion..\n\
De l\'organisation de donjon, à la chasse aux percos, à la création de stuffs/skins et plus encore..\n\
Tu as l\'embarras du choix et tu pourra changer quand tu veux selon ce que tu veux faire.```\n\
:black_small_square:\n\
:white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square:\n\
:black_small_square:\n\
:black_small_square:\n\
**『:military_medal:GRADES ?』**\n\
:black_small_square:\n\
*Level up !*\n');
channel_n.send('```Chaque joueur sur discord a un grade (1 à 200).\n\
Pour monter en grade, il te faudra de l\'xp que tu gagnera selon tes actions !\n\
Tu gagnes une "étoile" pour chaque grade passé et tu aura des avantages sur la longueur !```\n\
:black_small_square:\n\
:white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square:\n\
:black_small_square:\n\
:black_small_square:\n\
**『:classical_building:TRIBUNAL ?』**\n\
:black_small_square:\n\
*Vive la démocratie !*\n');
channel_n.send('```Personne ne va juger personne mais parfois des décisions doivent être prises concernant la guilde : changement de bras-droit, conseiller, changement d\'un système car il n\'est pas si terrible que ça..\n\
Si tu le souhaites, tu votes ! Parce que tout le monde décide !```\n\
:black_small_square:\n\
:white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square:\n\
:black_small_square:\n\
:black_small_square:\n\
**『:currency_exchange:MONNAIE ET ETOILES ?』**\n\
:black_small_square:\n\
*Non, pas d\'argent réel, on va parler kamas et crypto !*\n');
channel_n.send('```Tu vas pouvoir gagner des "étoiles", la crypto du discord que tu pourras convertir en kamas !\n\
Si une étoile vaut 10 000k et que tu veux en échanger 5, alors je te laisse faire le calcul..\n\
:black_small_square:\n\
__Attention ! Aucune étoile ne sera donnée en échange de kamas !__```\n\
:black_small_square:\n\
:white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square:\n\
:black_small_square:\n\
:black_small_square:\n\
**『:shopping_cart:BOUTIQUE ?』**\n\
:black_small_square:\n\
*Toujours avec tes petites étoiles !*\n');
channel_n.send('```Tu pourra acheter du mana, une box mystère, un perco, changer de rang.. Tout ça en échangeant tes étoiles.```\n\
:black_small_square:\n\
:white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square:\n\
:black_small_square:\n\
:black_small_square:\n\
**『:skull:PURGE ?』**\n\
:black_small_square:\n');
channel_n.send('*On te rassure maintenant, personne ne va s\'entretuer à la American Nightmare !*\n\
```Le bot va simplement enlever des étoiles aux joueurs inactifs sur discord depuis 14 jours, si vous tombez à 0, vous serez kick de la guilde mais vous pourrez toujours revenir si ça vous tente !```\n\
:black_small_square:\n\
:white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square:\n\
:black_small_square:\n\
:black_small_square:\n\
**Une fois que tu aura lu la totalité de ce canal, que tu aura retenu par cœur ce qu\'on vient de t\'expliquer, tu pourra rentrer la commande suivante.**\n\
*On compte sur toi !*\n\
:black_small_square:\n\
> **!GPALU**');


channel_n = message.guild.channels.cache.find(Collection => Collection.name == '『📋』bienvenu');
channel_n.send('**Nous avons à peu près tout vu, tu retrouvera ces infos plus tard et tu découvrira le reste une fois ton entrée dans le serveur !**\n\
**Il ne te reste plus qu\'à entrer la dernière commande.**\n\
Elle servira à vérifier ton identité en jeu !\n\
La guilde à laquelle tu appartiens, pour te diriger vers le bon serveur !\n\
Savoir qui t\'a recruté !\n\n\
> **!jesuis** *pseudo guilde @recruteur*\n\n\
Exemple :\n\
*!jesuis Bob AQUA @Patrick*');

    //channel_n.setTopic('');
    //channel_n.send('')
}

exports.write_in_tuto = write_in_tuto;