const Discord = require('discord.js');
const client = new Discord.Client();
data_guild = require('../data/structjson/guild.json');
const fs = require('fs');
const bot = require('../bot');
let all_channels;
async function write_in_channel(message)
{
    args = message.content.split(/ +/g);
    for (let i = 0; i < data_guild.name_guild.length; i++)
    {
        if (args[1] == data_guild.name_guild[i])
        {
            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_annonce[i]);
            await channel_n.setTopic('Annonces importantes !');

            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_règlement[i]);
            await channel_n.setTopic('Charte de bonne entente à relire sans modération.');
            await channel_n.send('**En cours de création !**')

            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_finances[i]);
            await channel_n.setTopic('L\'état économique de la guilde !');

            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_transferts[i]);
            await channel_n.setTopic('Chaque transfert d\'étoile en kamas justifié ici !');
            await channel_n.send('```Pour rappel, les commandes ont, parfois, un ou plusieurs arguments, n\'oubliez pas l\'espace entre l\'intitulé de la commande et ce que vous voulez en faire !```\n\n\
**Comment recevoir vos kamas ?**\n\n\
Il faut savoir qu\'on peut échanger minimum 5 :star: \n\n\
Après avoir taper la commande correspondante, le bot vous enverra un mp.\n\
Dans ce message, il vous donnera un item bas level à acheter avec un prix de vente qui\ correspondra au montant en kamas des étoiles que souhaitez échanger.\n\
Il ne vous restera plus qu\'à foncer en HDV des équipements pour le revendre !\n\
Les trois derniers chiffres du prix de vente seront générés aléatoirement par le bot, c\'est \
comme votre code PIN, c\'est grâce à celui-ci que le meneur saura qui vous êtes.\n\n\
Par exemple pour 5 étoiles qui valent 50 000k, vous aurez un prix à 50 123k.\n\n\
exemple :\n\
> **!transfert** *5*');

            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_all_rewards[i]);
            await channel_n.setTopic('Les gains reçus en temps réel par joueur !');

            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_général[i]);
            await channel_n.setTopic('Joie et bonne humeur sont les seules choses obligatoires dans ce canal !');

            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_profil[i]);
            await channel_n.setTopic('Pour voir ton profil et ta progression (ou celle d\'un autre) !');

            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_groupe[i]);
            await channel_n.setTopic('Groupe perco et donjon !');

            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_events[i]);
            await channel_n.setTopic('GG !');
            
            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_boutique[i]);
            await channel_n.setTopic('Comme son nom l\'indique, bons achats !');
            await channel_n.send('```Pour rappel, les commandes ont un ou plusieurs arguments, n\'oubliez pas l\'espace entre l\'intitulé de la commande et ce que vous voulez en faire !```\n\n\
**!mana**\n\
Coût : 4 :star:\n\
*Votre maximum de pm augmente de 1 (max 10) et vous gagnez un pm bonus.*\n\n\
**!box?** *nombre*\n\
Coût : 1 :star:\n\
*Box mystère, vous pouvez très bien gagner 10 étoiles, comme en perdre et d\'autres surprises, on va pas tout vous dire quand même ?*\n\
*Vous pouvez en acheter plusieurs d\'un coup en indiquant le nombre souhaité.*\n\n\
**!perco**\n\
Coût : 15 :star:\n\
*Vous donne le droit de poser un percepteur, maximum 1 par personne.*\n\n\n\
**LES RANGS**\n\
Les rangs coûtent 4 :star: sauf pénitent, gratuit !\n\
Avant de choisir, n\'oubliez pas de faire un tour sur le canal <#'+ data_guild.channel_rangs[i] +'> !\n\n\
**!rang** *espion*\n\
**!rang** *tueur de percepteur*\n\
**!rang** *muse*\n\
**!rang** *recruteur*\n\
**!rang** *pénitent*\n\n\
*Plusieurs ne se vendent pas.*');
            
            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_enclos[i]);
            await channel_n.setTopic('Location des enclos de la guilde !');
            
            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_la_purge[i]);
            let files = [];
            //files[0] = 'https://cdn.discordapp.com/attachments/703319341508329652/703724445961027674/Capture_decran_2019-07-25_a_22.36.43.png'
            await channel_n.setTopic('Que dire, j\'espère que ce n\'est pas la dernière fois qu\'on se voit ?');
            await  channel_n.send('**TOUTES LES DEUX SEMAINES, LE DIMANCHE ENTRE 20 H ET 22 H LA PURGE S\'INVITE !**\n\n\
**Les membres inactifs sur le discord pendant deux semaines perdront 4 étoiles !\n\
Si vous vous retrouvez à 0, vous serez kick de la guilde.**\n\
Pour éviter la purge, utilisez le pouvoir de votre rang, recrutez des joueurs, attaquez des percepteurs, allez en donjon... et plus encore !\n\n\
On ne peut pas toujours être actif et on le sait, n\'oubliez pas de demander à être pénitent\ si vous le souhaitez, c\'est gratuit mais vous perdez votre rang.\n\
Allez voir la <#'+ data_guild.channel_boutique[i] +'> !\n\n\
Les possibilités sont nombreuses, alors pas de panique !');
            //channel_n.send('https://cdn.discordapp.com/attachments/703319341508329652/703724445961027674/Capture_decran_2019-07-25_a_22.36.43.png').url;
            
            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_tribunal[i]);
            await channel_n.setTopic('On aura toujours besoin de votre avis !');
            
            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_command[i]);
            await channel_n.setTopic('Les commandes communes !');
            await channel_n.send('```Voici les commandes disponibles pour TOUS.```\n\
```Pour rappel, les commandes ont un ou plusieurs arguments, n\'oubliez pas l\'espace entre l\'intitulé de la commande et ce que vous voulez en faire !```\n\n\
> **!profil** ou **!profil** *@pseudo*\n\
Montre votre progression ou celle d\'un autre membre.\n\
A faire dans <#'+ data_guild.channel_profil[i] +'>\n\n\
> **!like** *@pseudo*\n\
Donne une étoile à une personne de votre choix, vous gagnerez un xp.\n\
A faire dans <#'+ data_guild.channel_général[i] +'>\n\n\
> **!don** *@pseudo* *nombre*\n\
Donne plusieurs étoiles à une personne de votre choix, vous gagnerez un xp.\n\
A faire dans <#'+ data_guild.channel_général[i] +'>\n\n\
> **!vol** *@pseudo*\n');
await channel_n.send('Vous avez une chance de voler une étoile à une personne de votre choix... Mais aussi de lui en donner une et c\'est gratuit !\n\
A faire dans <#'+ data_guild.channel_général[i] +'>\n\n\
> **!donjon** *@pseudo @pseudo ... (max 7)*\n\
Vous devez mentionner les personnes avec qui vous avez fait un donjon.\n\
A faire dans <#'+ data_guild.channel_groupe[i] +'>\n\
Un screen est obligatoire pour la réception des récompenses.\n\
Vous gagnerez alors tous 1 étoiles !\n\n\
> **!groupe_perco** *@pseudo @pseudo ... (max 4)*\n\
> **!ATQ** *[x,y]*\n\
Le chef mentionnera les personnes avec qui il veut former son groupe avec la __1ère commande__.\n\
Une fois la réponse des joueurs faite, le chef validera son groupe.\n\
Il devra ensuite, préciser la position du percepteur tué avec la __2ème commande__.\n\
Une fois fait, le chef fermera son groupe.\n\
A faire dans <#'+ data_guild.channel_groupe[i] +'>\n\
Un screen est obligatoire pour la réception des récompenses.');
            
            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_rangs[i]);
            await channel_n.setTopic('Présentation des rangs!');
            await channel_n.send('```Pour rappel, les commandes ont, parfois, un ou plusieurs arguments, n\'oubliez pas l\'espace entre l`\'intitulé de la commande et ce que vous voulez en faire !```\n\
:black_small_square:\n\
:white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square:\n\
:black_small_square:\n\
```Les rangs suivants sont donnés automatiquement !```\n\n\
**Initié :**\n\
*Nouvel arrivant qui devra choisir un rang si la guilde lui plaît.*\n\n\
**Apprenti : **\n\
*Rang donné en dessous du niveau 100 max. Le joueur devra donné 5% de son xp à la guilde et une fois le niveau 100 atteint, l\'apprenti recevra 10 étoiles.*\n\
*__Attention : Ce rang n\'est pas cumulable à un autre. Si vous achetez un autre rang, vous perdez celui-ci.__*\n\n\
**Elu :**\n');
await channel_n.send('*Celui qui donnera le plus d’xp en guilde aura ce rang et pourra poser un percepteur de plus que les autres.*\n\
:black_small_square:\n\
:white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square:\n\
:black_small_square:\n\
```Les rangs suivants se trouvent en boutique !```\n\n\
**Recruteur**\n\
*Il recrute de nouveaux membres en jeu.*\n\n\
**Muse**\n\
*Elle crée du stuff et des skins pour les autres membres.*\n\n\
**Espion**\n\
*Il organise les donjons en guilde comme bon lui semble.*\n\
*Avec la commande **!donjon**, vous gagnez double récompense.*\n\
Voir <#'+ data_guild.channel_command[i] +'>\n\n\
**Tueur de percepteur**\n');
await await channel_n.send('Il attaque les percepteurs.*\n\
*Avec la commande **!groupe_perco** et **!ATQ**, vous gagnez double récompense.*\n\
Voir <#'+ data_guild.channel_command[i] +'>\n\n\
**Pénitent**\n\
*Pour éviter la purge si vous êtes absent, vous serez kick en jeu, vos étoiles seront tout de même sauvegardées, mais vous n\'aurez plus accès aux fonctionnalités sur Discord.*');
channel_n.send(':black_small_square:\n\
:white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square:\n\
:black_small_square:\n\
```Les rangs suivants ne se vendent pas !```\n\n\
**Meneur**\n\
*Il a tout pouvoir sauf celui de modifier le Discord, il a donc accès à toutes les commandes pour gérer sa guilde.*\n\n\
**Bras-droit**\n\
*Il est choisi par le Meneur pour l’aider dans la gestion de la guilde et peut gérer celle-ci pendant les absences du Meneur, il a donc le même pouvoir que lui à quelques exceptions près.*\n\n\
**Conseiller**\n\
*Il est choisi par les joueurs via un vote. Il est la personne de confiance et comme son nom l’indique il est là pour aider, répondre aux questions et est attentif aux possibles tricheries.*');

            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_questions[i]);
            await channel_n.setTopic('Il n\'y aucune question bête, n\hésites pas !');
            
            channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_links[i]);
            await channel_n.setTopic('Les liens qui pourront toujours te servir !');
            await channel_n.send('```#DOFUS```\n\
Site: https://www.dofus.com/fr\n\
Facebook: https://www.facebook.com/DOFUS\n\
Twitter: https://twitter.com/dofusfr?lang=fr\n\
Forum: https://www.dofus.com/fr/forum\n\n\
```#DOFUS BOOK```\n\
Création de stuff/skin https://www.dofusbook.net/fr/\n\n\
```#CHASSE AU TRESOR```\n\
Positions des indices du Monde des Douze https://dofus-map.com/hunt\n\n\
```#METAMOB```\n\
Dofus Ocre http://www.metamob.fr/\n\n\
```#DOFENSIVE```\n\
Recherché, info boss donjon https://dofensive.com/fr\n\n\
```#DOFUS POUR LES NOOBS```\n\
Aides quêtes https://www.dofuspourlesnoobs.com/\n\n\
```#DOFUS MAP```\n\
Carte ressources https://dofus-map.com/\n\n\
```#ALMANAX```\n\
http://www.krosmoz.com/fr/almanax\n\n\
```#DOFUS PORTALS```\n\
Chaque portail de dimension https://dofus-portals.fr/portails/66');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_staff[i]);
await channel_n.setTopic('Pour un problème particulier ou un bug !');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_report[i]);
await channel_n.setTopic('Balance ton guildeux !');
            await channel_n.send('**Votre message dans ce canal est invisible, une fois écrit, il est redirigé.**\n\
Ce canal n\'est pas un jeu, utilisez-le dans l\'urgence.\n\n\
Aucune commande n\'est requise, vous avez simplement à expliquer votre problème avec le pseudo du joueur (sans mention) et un screen si cela est nécessaire !\n\n\
*Un membre du staff reviendra vite vers vous en mp.*');

            break;
        }
    }
}
exports.write_in_channel = write_in_channel;