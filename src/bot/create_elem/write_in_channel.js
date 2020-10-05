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
            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_annonce[i]);
            channel_n.setTopic('Toutes les annonces importantes seront faites sur ce canal !');

            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_règlement[i]);
            channel_n.setTopic('Charte de bonne entente à relire sans modération.');
            channel_n.send('```1)    Nous sommes une guilde où tout se passe sur Discord, il est donc obligatoire d’y être.\n\n\
2)    Tout abus sur les commandes ou utilisation de faille entraînera un ban immédiat. Si cela est dû à un bug, merci de prévenir un membre du staff.\n\n\
3)    Toute forme de discrimination, incitation à la haine, atteinte à la personne sera sévèrement puni. Il entraînera un ban immédiat et un report si cela est nécessaire.\n\n\
4)    Toute tricherie menant à arnaquer un autre joueur subira exactement le même sort. Un ban immédiat et un report si nécessaire.\n\n\
5)    Par manque de place, seul les membres du staff et protecteurs seront autorisés à posséder un deuxième personnage en guilde. Celui-ci aura le range de « muse ».\n\n\
6)    Pour votre sécurité, faites attention aux faux pseudos, si vous avez un doute, n’hésitez pas à vérifier son orthographe, à envoyer un message privé au joueur en question sur Discord.\n\n\
7)    Ne cliquez sur aucun lien en jeu, tout ce qui vous attend est un hacker au bout de site.\n\n\
8)    La promotion de PL, XP, kamas contre quoi que ce soit est illégal en guilde.```');
            channel_n.send('```9)    Aucun level minimum n’est requis pour rentrer dans la guilde cependant il faut avoir minimum 16 ans. Nous n’avons (évidemment) aucun moyen de le vérifier, donc seul votre bienveillance et votre maturité pourront vous sauver.\n\n\
10)    Les joueurs à l’essai auront 24h pour effectuer le tutoriel et choisir un rang. Après ce délai, ils seront ban de la guilde.\n\n\
11)    Une absence de 7 jours d’affilé entraînera une expulsion en guilde pour inactivité (sauf pénitent). Vous pourrez bien sûr revenir en effectuant la demande sur Discord.\n\n\
12)    Seuls ceux faisant partie de la guilde et ayant le rang adéquat peuvent activer leurs récompenses.\n\n\
13)    Le droit de poser un percepteur s\'obtient uniquement dans la boutique. Attention au #tribunal.\n\n\
14)    Venir en vocal peut vous permettre de donner vos voix pour le tribunal mais aussi de participer au développement de la guilde.\n\n\
15)    Tous les membres devront survivre à la purge une fois par semaine.```')

            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_finances[i]);
            channel_n.setTopic('Pour tout savoir de l\'état économique de la guilde, ce canal sera mis à jour le plus régulièrement possible.');

            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_transferts[i]);
            channel_n.setTopic('Chaque transfert d\'étoile en kamas sera inscrit dans ce canal !');

            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_all_rewards[i]);
            channel_n.setTopic('Un grand journal de bord qui t\'indiquera ce que tu as gagné en temps réel, étoiles/lvl/xp/pm !');

            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_général[i]);
            channel_n.setTopic('Joie et bonne humeur sont les seules choses obligatoires dans ce canal !\n\
Pour rappel les commandes possibles sont les suivantes :\n\
!like @pseudo\n\
!stolestar @pseudo\n\
!donjon @pseudo @pseudo [...]\n\
!okdj');

            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_events[i]);
            channel_n.setTopic('C\'est ici que chaque évènement aura lieu !');
            
            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_profil[i]);
            channel_n.setTopic('Pour voir ton profil et ta progression (ou celle d\'un autre?), c\'est ici !\n\
Pour rappel, la commande :\n\
!profil @pseudo');
            
            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_boutique[i]);
            channel_n.setTopic('Comme son nom l\'indique, bons achats !');
            channel_n.send('```Pour rappel, les commandes ont un ou plusieurs arguments, n\'oubliez pas l\'espace entre l\'intitulé de la commande et ce que vous voulez en faire !```\n\n\
**!xp**\n\
Coût : 3 :star:\n\
*Vous gagnez un level.*\n\n\
**!percodroit**\n\
Coût : 15 :star:\n\
*Permet d\'avoir le droit de poser un percepteur, max 1 par personne.*\n\n\
**!mana**\n\
Coût : 4 :star:\n\
*Votre maximum de pm augmente de 1 (max 10) et vous gagnez un pm bonus.*\n\n\
**!box?**\n\
Coût : 2 :star:\n\
*Tout peux arriver. Vous pouvez très bien gagnez 10 étoiles, comme en perdre, même déclencher la <#'+ data_guild.channel_la_purge[i] +'>.*\n\
*Vous pouvez acheter plusieurs box mystères d\'un coup en indiquant le nombre souhaité en argument.*\n\n\
**!dofusgrade**\n\
Coût : 2 :star:\n\
*Le grade que vous souhaitez avoir à indiquer en argument.*\n\
*Sauf bras-droit, conseiller et trésorier.*')
            
            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_enclos[i]);
            channel_n.setTopic('Les système de location des enclos de la guilde !');
            
            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_la_purge[i]);
            let files = [];
            files[0] = 'https://cdn.discordapp.com/attachments/703319341508329652/703724445961027674/Capture_decran_2019-07-25_a_22.36.43.png'
            channel_n.setTopic('Que dire, j\'espère que ce n\'est pas la dernière fois qu\'on se voit ?');
            channel_n.send('**CHAQUE DIMANCHE ENTRE 20H ET 22H LA PURGE S\'INVITE**\n\n\
Les membres inactifs perdront 5 étoiles. Si vous vous retrouvez à 0, vous serez kick de la guilde.\n\n\
*On ne peut pas toujours être actif, on le sait, n\'oubliez pas de demander à être pénitent dans ce cas là !*\n\
*Pour éviter la purge, vous pouvez aller 2 fois en vocal par semaine, recruter quelqu\'un, utiliser vos pouvoirs, faire des skins... Les possibilités sont nombreuses !*\n\n');
            channel_n.send('https://cdn.discordapp.com/attachments/703319341508329652/703724445961027674/Capture_decran_2019-07-25_a_22.36.43.png').url;
            
            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_tribunal[i]);
            channel_n.setTopic('Les plus grandes décisions sont prises ici concernant la guilde !');
            
            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_command[i]);
            channel_n.setTopic('Les commandes principales se trouvent toutes ici !');
            channel_n.send('```Voici les pouvoirs (commandes) disponibles dès le grade 0 pour TOUS non spécifiques à votre rang.```\n\
```Pour rappel, les commandes ont un ou plusieurs arguments, n\'oubliez pas l\'espace entre l\'intitulé de la commande et ce que vous voulez en faire !```\n\n\
!profil **ou** !profil @pseudo\n\
Montre votre progression ou celle d\'un autre membre.\n\
A faire dans <#'+ data_guild.channel_profil[i] +'>\n\n\
!like *@pseudo*\n\
Donne une étoile à une personne de votre choix. Vous gagnez un xp.\n\
A faire dans <#'+ data_guild.channel_général[i] +'>\n\n\
!stolestar  *@pseudo*\n\
Vous avez une chance de voler deux étoiles à un autres membres... Mais aussi de lui en donner deux. Ce pouvoir use deux pm.\n\
A faire dans <#'+ data_guild.channel_général[i] +'>\n\n\
**Pour les donjons**\n\
!donjon *@pseudo @pseudo ...*\n\
Tag les personnes avec qui vous avez effectué un donjon.\n\
A faire dans <#'+ data_guild.channel_général[i] +'>\n\
!okdj\n\
Permet de valider un donjon déclaré par un autre membre.\n\
A faire dans <#'+ data_guild.channel_général[i] +'>\n\
**Vous gagnerez alors tous 2 étoiles**');
            
            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_rangs[i]);
            channel_n.setTopic('Présentation des rangs, c\'est important que tu fasses le bon choix avant de te lancer.');
            
            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_questions[i]);
            channel_n.setTopic('Il n\'y aucune question bête, n\hésites pas !');
            
            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_links[i]);
            channel_n.setTopic('Voici les liens qui pourront toujours te servir !');
            channel_n.send('```#DOFUS```\n\
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
            break;
        }
    }
}
exports.write_in_channel = write_in_channel;