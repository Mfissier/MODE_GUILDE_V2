const Discord = require('discord.js');
const data_sys = require('../../../data/structjson/all_systeme.json');
async function fun_write_in_channels(message)
{
    let channel_n;
    //
//--------------------------------------------
/*
        『🔴』𝐑𝐞̀𝐠𝐥𝐞𝐦𝐞𝐧𝐭
*/    
channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.Règlement_id);
channel_n.send("```Règles Globales du Discord :```\n\n\
> :green_square: Votre pseudo discord doit être associé à votre pseudo sur Dofus.\n\n\
> :green_square: Respectez les différents channels ! On évite d'abuser du salon report... :smile: !\n\n\
> :green_square: :orange_square: :red_square: Mentionner dans le but de spammer quelqu'un est interdit.\n\n\
> :green_square: :orange_square: :red_square: En vocal, restez poli avec tout le monde. On rigole de tout, mais pas avec tout le monde !\n\n\
> :orange_square: Si vous allez être AFK pendant une durée indéterminée ou plutôt longue, merci de prendre le rôle Pénitent dans la boutique.\n\n\
> :orange_square: :red_square: Le respect entre les membres est primordial et obligatoire ! On est sur un jeu pour s'amuser, pas pour se prendre la tête !\n\n\
> :red_square: Il est strictement interdit de récupérer et de diffuser des informations personnelles au sein du discord/dofus, que ce soit même en tant que menace ou en tant que rigolade.\n\n\
> :red_square: Il est interdit d'usurper l'identité de quelqu'un. Si nous accédons aux preuves nécessaires qui vous incriminent vous serez sanctionné.");
channel_n.send("> :orange_square: :red_square: Le respect entre les membres est primordial et obligatoire ! On est sur un jeu pour s'amuser, pas pour se prendre la tête !\n\n\
> :red_square: Il est strictement interdit de récupérer et de diffuser des informations personnelles au sein du discord/dofus, que ce soit même en tant que menace ou en tant que rigolade.\n\n\
> :red_square: Il est interdit d'usurper l'identité de quelqu'un. Si nous accédons aux preuves nécessaires qui vous incriminent vous serez sanctionné.");
channel_n.send("``` ```\n\
Les sanctions seront les suivantes :\n\
:green_square: Avertissement\n\
:orange_square: Kick\n\
:red_square: Ban");

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
//--------------------------------------------
/*
    『⭐』Transfert_id
*/    
channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.Transfert_id);
channel_n.send("`Pour rappel, les commandes ont, parfois, un ou plusieurs arguments, n'oubliez pas l'espace entre l'intitulé de la commande et ce que vous voulez en faire !`\n\
Comment recevoir vos kamas ?\n\n\
Il faut savoir qu'on peut échanger minimum 5 :star:\n\n\
Après avoir tapé la commande correspondante, le bot vous enverra un mp.\n\
Dans ce message, il vous donnera le montant exact que vous allez recevoir.\n\
L'équipe d'Aqua reviendra vers vous pour lancer l'échange !\n\
Un peu de patience pour recevoir votre récompense.\n\n\
Par exemple pour 5 étoiles qui valent 50 000k, vous aurez un prix à 50 123k.\n\
exemple :\n\
!transfert 5");
//--------------------------------------------
//--------------------------------------------


//--------------------------------------------
//--------------------------------------------
/*
    『⭐』𝐒𝐲𝐬𝐭𝐞̀𝐦𝐞
*/    
channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.Système_id);
channel_n.send("Vous l\'avez sûrement compris, AQUA est une guilde unique qui se base sur un système particulier et propre à lui même d\'économie interne ! Grâce au système quasiment entièrement géré par le bot confectionné par Kililig, la guilde est autonome.\n\n\
:arrow_forward:  Pour récapituler, nous avons donc notre monnaie interne qui sont les étoiles ( :star: ) et nous avons aussi de l\'énergie qui sont des points de mana ( :droplet: ). Il existe une multitude de moyens pour acquérir ces :star:  qui ont une valeur intrinsèque mais qui aussi peuvent se transformer en kamas pour avoir une valeur marchande. (Pour transformer les :star:  en kamas, il faut directement se renseigner dans le salon <#"+ data_sys.Transfert_id +">)\n\n\
**__Etoiles :__**\n\
__Elles permettent de : __\n\
> **Acheter des métiers dans le salon dédié** <#"+ data_sys.boutique_id +"> **!**\n\
> **Transformer ses étoiles en kamas directement en jeu grâce au salon dédié** <#"+ data_sys.Transfert_id +">**!**\n\
> **Marchander avec les guildeux !**\n\n\
:arrow_forward: La particularité de ce système, c\'est l\'autonomie d\'AQUA qui permet de faire prospérer la guilde mais aussi les membres de celle-ci ! Grâce à ce système, nous espérons que nous pouvons rendre votre expérience de jeu sur DOFUS encore plus unique qu\'avant");
channel_n.send("```Commandes :```\n\
**!like @mention**\n\
> Permet de like un joueur de la guilde, ce qui lui fera gagner une étoile. Cette commande est répétable et au fil des succès que vous obtiendrez grâce à elle, de nouveaux pouvoirs pourront se débloquer. Voir le salon <#"+ data_sys.Etoiles_id +">\n\
> Faisable dans les canaux de **#discussions**.\n\n\
**!don @mention [nombre]**\n\
> Permet d\'offrir une valeur X de :star:  que vous possédez à un joueur de la guilde. Cette commande est répétable et au fil des succès que vous obtiendrez grâce à elle, de nouveaux pouvoirs pourront se débloquer. Voir le salon <#"+ data_sys.Etoiles_id +">\n\
> Faisable dans les canaux de **#discussions**.\n\n\
**!vol @mention** \n\
> Vous avez une légère chance de voler une :star:  à un joueur de la guilde, dans le cas contraire, vous lui donnez une :star:   à celui-ci pour vous faire réfléchir sur votre acte... Infâme ! Cette commande est répétable et au fil des succès que vous obtiendrez grâce à elle, de nouveaux pouvoirs pourront se débloquer. Voir le salon <#"+ data_sys.Succès_id +">\n\
> Faisable dans les canaux de **#discussions**.\n\n\
> **!profil [@mention/optionnel]**\n\
> Permet de consulter son profil (*ou celui d'un autre en le mentionnant*) pour voir le nombre de :star: , de :droplet: qu’on possède. Mais aussi pour pouvoir voir les différents succès qu’on a obtenu, ou encore, le nombre de percepteurs qu’on peut poser.\n\
> Faisable dans le canal <#"+ data_sys.Profil_id +">.");
//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
//--------------------------------------------
/*
    『🌈』𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬
*/    
channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.Information_id);
channel_n.send("```En plus de la boutique qui recense les métiers, vous avez ici toutes les informations complémentaires et les commandes à connaître pour votre/vos métiers !```\n\
> Vous ne pouvez pas avoir deux métiers différents, sauf quand ils atteignent un niveau assez élevé. Pour ceci, vous pouvez voir l'ensemble des succès dans le #succes dédié :slight_smile: ! De plus, de futurs métiers pourraient faire leurs apparitions !\n\
__**Espion : **__\n\
*L'espion organise des sorties donjons, il pourra récupérer des étoiles à chaque donjon effectué avec un ou des membres de la guilde. Il lui suffit uniquement de poster un screen du boss vaincu et d'utiliser la commande suivante* \n\
> **!donjon @mention @mention**\n\
> Faisable dans le salon <#"+ data_sys.Espion_id +"> de la catégorie **Métiers**.");
channel_n.send("__**Tueur de percepteur :**__\n\
*Le tueur de percepteurs tue les différents percepteurs en contrepartie, il obtient des étoiles.  Il lui suffit uniquement de poster un screen du percepteur vaincu et d'utiliser la commande suivante* \n\
> **!atq @mention @mention @...**\n\
> **!def @mention @mention @...**\n\
> **__Mentionner les personnes avec qui vous avez attaqué ou défendu.__**\n\
> Faisable dans le canal <#"+ data_sys.Tueur_id +"> de la catégorie **Métiers** pour recevoir ses :star:  \n\n\
__**Muse : **__\n\
*La muse est le styliste de la guilde, il crée des skins pour les guildeux ! En échange, il obtient des étoiles pour chaque création acceptée par les joueurs  ! Il lui suffit uniquement de créer un skin qui sera accepté par un joueur et d'utiliser la commande suivante* \n\
> **!skin @mention**\n\
> Faisable dans le salon <#"+ data_sys.Muse_id +"> de la catégorie **Métiers**.\n\n\
__**Recruteur : **__\n\
*Le recruteur a pour but de renforcer les rangs d'AQUA pour qu'on devienne une guilde forte et reconnue ! A chaque nouveau joueur recruté, il obtient des étoiles ! Aucune commande à faire, uniquement à recruter efficacement mais surtout avec le plus grand soin. Car les futurs joueurs recrutés, deviendront aussi vos futurs camarades...!*\n\n\
__**Chercheur de trésors :**__\n\
*La chasse ici, n'est pas la même que celle des Terra cogita... Vous ne chercherez pas des coffres animés mais plutôt des chevaliers à quatre pattes qui détiennent les butins des autres guildes concurrentes du serveur ! Vous l'avez compris, vous chercherez efficacement des percepteurs ennemis pour la guilde ! Il suffit uniquement au chasseur de trésor d'utiliser la commande* \n\
**!perco [pos, pos] [nom_alliance] [butin/nbr]**\n\
> <#"+ data_sys.Chercheur_id +">");
//--------------------------------------------
//--------------------------------------------

/*
    『👋』bases
    『👋』pseudo
    『👋』level
    『👋』mention
    『👋』roles
    『👋』les_canaux
    『👋』les_commandes
    『👋』argument
    『👋』demarrage
    『👋』etoiles
    『👋』economie
    『👋』ton_profil
    『👋』cmd
    『👋』métier
    『👋』boutique
    『👋』résumé
    『👋』question
*/
channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_bases_id);
await channel_n.send('```Pour réussir ce tutoriel, il te faudra quelques bases de connaissances assez simples.```\n\
Je vais donc t\'aider à comprendre les outils mis à ta disposition :\n\n\
Il est un peu long (20 minutes maximum), mais il est vraiment important pour tout nouveau membre de comprendre un minimum les rouages de ce système !\n\
> [:question:] **N\'oublie surtout pas de garder en tête le pseudo de la personne qui t\'a recruté avant de commencer ce tutoriel  !  Je vais te le demander dès l\'instant où tu enverras un message dans ce canal !**\n\n\
[:question:]  *Envoie le message que tu veux dans ce canal pour passer à la suite*');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_pseudo_id);
await channel_n.send('> Bienvenue à toi jeune aventurier ! Je suis le **bot** qui régit ce discord... Mais aussi cette coalition ! Et toi, qui es-tu ? Quel est ton **nom** ? __Dis-moi tout !__\n\n\
*Si le nom que tu donnes ne correspond pas à celui en jeu, ta futur guilde peux te refuser et te faire repasser ce tuto !*\n\
[:question:]  *Envoie un message dans le canal contenant ton pseudonyme* :\n\
> **pseudo**');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_level_id);
await channel_n.send('> Parfait ! Je te re-souhaite la bienvenue donc ! Ici, tu trouveras sûrement des compagnons de jeu formidable avec qui vous écrirez une nouvelle page d\'aventures à la recherche des DOFUS ! Pour faciliter les choses... J\'aimerais savoir quel est ton niveau ?\n\n\
[:question:] *Donne ton level* :\n\
> **123** (ex)');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_mention_id);
await channel_n.send('Quand tu as cliqué sur ce **channel**, il y avait une notification sur celui-ci.\n\
> Cela veut dire qu\'un message te concerne directement. (*il sera d\'une couleur différente*).\n\n\
Mentionner un membre te permet à la fois de dire à quelqu\'un que tu lui parles directement, mais aussi de pouvoir chercher un pseudo dans le Discord.\n\n\
1°) **Pour mentionner quelqu\'un écris tout d\'abord @**\n\
2°) **Une liste va apparaître**\n\
3°) **touche [tab] pour compléter automatiquement le pseudo recherché**\n\n\
[:question:] *Envoie un message dans ce canal en notifiant la personne qui t\'a recruté de cette manière* :kissing:\n\
> <@!'+ '340426105892634626' +'>');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_roles_id);
await channel_n.send('Les rôles ont deux utilités :\n\
> Avoir un intitulé \n\
> Donne des droits (visibilité de certains canaux, pouvoir, etc, ...).\n\n\
Par exemple ton métier @tuto permet à tout le monde de savoir que tu fais le tutoriel et t\'accorde le droit de voir ce canal et d\'écrire dedans.\n\n\
De la même manière que tu peux mentionner une personne, tu peux aussi mentionner un rôle.\n\
Ce qui veut dire que toutes les personnes ayant ce rôle recevront une notification.\n\n\
Cela peut-être très pratique quand tu as besoin de communiquer un message à plusieurs personnes :\n\n\
[:question:] *Mentionne un rôle pour passer à la suite* :thumbsup:\n\
> <@&'+ data_sys.roles_tuto_4_id +'>');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_les_canaux_id);
await channel_n.send('*Ceci est un canal ! Pas besoin d\'être une lumière pour le comprendre.*\n\
> **Mais il te faudra être attentif !**\n\n\
__Tout en haut à gauche :__\n\
> **Le nom du canal**\n\
> **Son sujet**\n\n\
**Le sujet d\'un canal t\'indique sur ce Discord les informations importantes. N\'oublie pas d\'y jeter un coup d\'oeil si tu te sens perdu.**\n\n\
__Tout en haut a droite :__\n\
> Une **cloche de notification** pour rendre ce canal muet (cela te permet d\'avoir la paix).\n\
> Le deuxième logo  *"les messages épinglés"*, il répertorie les messages les plus importants et t\'y redirige automatiquement si tu cliques dessus !\n\
> Et enfin, le troisième permet de cacher ou faire réapparaître la liste des membres qui peuvent voir ce canal.\n\n\
``` Lien vers un canal ```\n\
Il y aura beaucoup de canaux qui vont apparaître quand tu feras partie de notre coalition.\n\
Pour t\'aider, des liens vers d\'autres canaux te seront parfois donné.\n\n\
<#'+ data_sys.channel_tuto_les_canaux_id +'> <= Si tu vois le nom d\'un canal comme ceci, tu peux cliquer dessus et tu y seras automatiquement *téléporté*.\n\
Bien évidement, si tu cliques dessus actuellement, il ne se passera rien, tu seras redirigé sur ce même canal.\n\n\
De la même manière si tu veux rediriger quelqu\'un vers un autre canal, il te suffit de mentionner ce canal avec un # avant !\n\n\
[:question:]  *Mentionne ce canal pour passer à la suite*\n\
> <#'+ data_sys.channel_tuto_les_canaux_id +'>');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_les_commandes_id);
await channel_n.send('Une commande est un message comme un autre, sauf qu\'il active des effets sur le discord.\n\
Les commandes sur ce Discord commencent toujours par un **!**.\n\n\
[:question:] *Ecris une commande pour passer à la suite*\n\
> **!**cmd');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_argument_id);
await channel_n.send("```Rentrons dans les détails.```\n\
Des commandes te seront, dans un futur proche, données et tu devras les utiliser.\n\
Bien entendu, tu auras un manuel d'utilisation à chaque fois qui comportera :\n\
**!cmd** [**arguments**]  [...]\n\
> le nom de la commande et ses arguments (il peut y en avoir plusieurs).\n\
> En dessous, tu auras bien entendu une explication.\n\
> Certaines commandes ne voudront pas marcher si tu ne mets pas d'argument.\n\
> **__L'ordre des arguments est super important__**\n\n\
__Voici la liste des différents arguments que tu peux avoir dans une commandes :__\n\
> [**`NBR`**] = tu dois donner un nombre (*[5] n\'est pas un nombre, `5` oui !*)\n\
> [**`@pseudo`**] = tu dois mentionner une personne\n\
> [**`@rôle`**] = tu dois mentionner un rôle\n\
> [**`autre`**] = il s\'agit d\'un texte\n\
> [`texte`**/optionnel**]  = Cet argument que tu dois remplir n'est pas obligatoire (`sauf si t'as guilde le précise dans son bulletin !`).\n\n\
[:question:]  *__Fais cette commande qui a deux arguments (un optionnel) :__*\n\
**`!GPALU`** [`NBR`]  [`commentaire`/optionnel]\n\n\
> [NBR] = *les minutes que tu penses avoir passé à faire le début de ce tutoriel !*\n\
> [commentaire/optionnel] = *si tu as quelque chose à dire*\n\
*Exemple : !gpalu 1 `Ceci est un commentaire que liera le staff de ma futur guilde !`*");

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_demarrage_id);
await channel_n.send('```Tu sais désormais utiliser discord !```\n\
> **Passons aux choses sérieuses**  :eyes: \n\n\
[:question:] *Fais la commande* :\n\
> **!GOGOGO**');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_etoiles_id);
await channel_n.send('> __Je pense que les présentations sont désormais faites !__\n\
> Il est temps que je t\'accueille comme il se doit et que je te fasse visiter notre magnifique serveur. J\'espère que tu aimeras :robot: \n\n\
Voici le lien vers le canal qui répertorie toutes les actions qui se passent sur le Discord.\n\
> <#'+ data_sys.Etoiles_id +'>  <= **clique et reviens me voir sur ce canal**\n\n\
[:question:]  *> Une fois le canal <#'+ data_sys.Etoiles_id +'> visité, reviens ici et fais la commande* :\n\
> **!next**');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_economie_id);
await channel_n.send('> **Tu dois te demander ce que sont ces :star: que tu as pu apercevoir ?**\n\n\
Les :star: sont la monnaie de notre **coalition**, chaque membre peut en produire en faisant diverses actions :\n\
> Faire des donjons\n\
> Recruter \n\
> etc,...\n\n\
```Mais ce n\'est pas tout...```\n\
> Chaque guilde possède un coffre qui se remplit en fonction des efforts de chacun (*on reviendra dessus plus tard*).\n\
> Les :star: générées par chaque guilde permet d\'en déterminer la valeur en kamas.\n\
> De cette manière si la valeur des :star:  est à **10 000 k/u**.\n\
> Si tu as amassé **10** :star: tu pourras gagner **100 000 kamas** !\n\n\
Comme tu as pu le voir, le canal <#'+ data_sys.Etoiles_id +'> te montre l\'historique de chaque :star: générées par l\'ensemble de la coallition.\n\
Voici les canaux qui concernent l\'économie des guildes et comment transférer tes :star: en kamas.\n\n\
__Visite ces trois canaux et reviens me voir sur ce canal :__\n\
> <#'+ data_sys.Recompenses_id +'> Historique des transferts\n\
> <#'+ data_sys.Finances_id +'> Les finances des guildes\n\
> <#'+ data_sys.Transfert_id +'> Permet de transférer ses :star: en kamas\n\n\
[:question:]  *Fais la commande* :\n\
> **!next**');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_ton_profil_id);
await channel_n.send("> **Pour connaître ta progression, il faudra te rendre sur le canal :**\n\
> <#"+ data_sys.Profil_id +"> \n\
```Que dit ton profil```\n\
> :star: Nombres d'étoiles en ta possession\n\
> Ton **grade** et ton **xp** permettent de connaître ton activité. Plus ton grade est haut, *mieux écouté tu seras...*\n\
> :droplet: Il s'agit du mana. Si tu n'en as plus, tu ne pourras pas gagner des :star:. Le mana se renouvelle toutes les 24H.\n\
> :horse: 0/2 c'est le nombre de percepteur que tu peux poser ! [Dans ton cas tu peux en poser `0`]\n\
> :moneybag: C'est les kamas qui peuvent t'être donnés en récompenses\n\
Fais la commande **!profil** dans le canal <#'+ data_sys.Profil_id +'>  pour voir ta fiche de membre :thumbsup: \n\n\
[:question:]  *Une fois fini, reviens dans ce canal, et fais la commande* :\n\
> **!next**");

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_cmd_id);
await channel_n.send('Bon ! Il est temps de t\'apprendre les commandes de bases, et utilisables dans tous les canaux de discussions.\n\n\
**!vol @mention**\n\
> Tu as 1/2 chance de voler ou de donner une :star: à un membre de ton choix.\n\n\
**!don @mention [nbr]**\n\
> Permet de donner des :star:\n\n\
**!like @mention**\n\
> Permet de créer et de donner une :star:\n\n\
[:question:]  *Utilise ces trois commandes sur le @bot_discord pour passer à la suite du tutoriel !*');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_métier_id);
await channel_n.send('```Gagner ses étoiles```\n\
Les commandes **like/don/vol** sont une petite source de revenus comparées aux métiers de guildes.\n\n\
Dans chaque guilde de la **coalition**, on retrouve des **métiers** différents qui s\'utilisent sous forme de commandes avec quelques fois des preuves à fournir par screen. Tout cela pour débloquer des belles **récompenses**. \n\
Ainsi, les membres peuvent gagner plus de :star: en  faisant certaines activités, comme : \n\n\
> Recruter\n\
> Sortie donjon\n\
> Chercher des positions de percepteurs\n\
> Etc,...\n\n\
**Pour en gagner bien plus**, chaque membre se dirige dans un domaine en particulier.\n\
> Quelqu\'un qui recrute beaucoup, va vouloir se spécialiser dans ce domaine et obtenir le métier **Recruteur**\n\
> En possédant un tel métier, il débloque des succès associés ainsi que des :star: ou des bonus en plus !\n\n\
Avec son **métier de prédilection**, un joueur gagne plus de :star: , d\'**expériences** et même des **succès** qui donneront des avantages par la suite.\n\n\
``` Mais à quoi ça sert ?```\n\
Les guildes de la coalition sont gérées à **90 %** par ses membres et leurs décisions.\n\
Autrement dit, si personne ne recrute, ne fait de donjons, (ne fait rien) ... Rien ne se passera, la guilde dépérira et finira par disparaître.\n\
__Ici, ce sont tes efforts, tes initiatives qui forgeront et construiront ta guilde.__\n\
**Ce n\'est pas à une poignée de membres de tout faire, mais chacun a sa responsabilité.**\n\n\
[:question:]  *Fais la commande* :\n\
**!achat**');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_boutique_id);
await channel_n.send("Bon, nous avons bientôt fini !\n\n\
```Obtiens ton rang```\n\
**Pour obtenir ta spécialisation (ton rang) dirige toi vers la <#'+ data_sys.boutique_id +'> et je t'offre l'un de ces trois métiers de départ :**\n\
> Recruteur \n\
> Espion (donjon)\n\
> Chercheur de trésor (traquer percepteur).\n\n\
`Tu seras obligé d'acheter soit le rang Recruteur, Espion, ou Chercheur de Trésor pour finir ce tutoriel !`\n\
```La boutique```\n\
Et oui ! Les :star: ne servent pas uniquement à se faire de l'argent en jeu, mais aussi de faire des achats de services.\n\n\
```Les percepteurs```\n\
Tu peux y acheter le __droit de poser **1** à **2** percepteurs.__\n\n\
```Taxes percepteurs```\n\
Les taxes percepteurs prennent 20 % des bénéfices. Permettant de répartir les richesses, de créer une économie, de limiter un monopole de certains joueurs, d\'augmenter la valeur des :star: qui fluctue en fonction de celles produites et de ce qu\'il y a dans le coffre !\n\
**Toutes taxes non versées peut-être punis sévèrement.**\n\n\
__**La commande** :__\n\
> !taxe [nbr] te permet de savoir combien tu dois verser dans le coffre.\n\
*Et ne t'inquiètes surtout pas ! Lorsque tu feras cette commande, je viendrais personnellement t\'expliquer comment remplir le coffre de guilde !*\n\n\
[:question:] Achète ton rang dans le canal <#'+ data_sys.boutique_id +'>, reviens ici et fais la commande :\n\
**!next**");

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_résumé_id);
await channel_n.send('```En résumé```\n\
> **La coalition est un ensemble de guilde.**\n\
> **Chaque guilde possède sa propre économie et sa propre monnaie.**\n\
> **Cette monnaie les :star: sont générées par les membres durant des activités diverses (donjon, recrutement, etc,...).**\n\
> **Ces activités/métiers permettent à chaque guilde de rester actives et dans l\'entraide.**\n\
> **Les :star: crées par les membres peuvent être transformées en kamas dans le canal** <#'+ data_sys.Transfert_id +'>\n\
> **Les coffres de guildes sont financés par les taxes mises sur les bénéfices des percepteurs récoltés.**\n\n\
[:question:]  *Fais la commande* :\n\
**!next**');

channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.channel_tuto_question_id);
await channel_n.send('```Le moment le plus important, sois très attentif !```\n\
Après ces **informations des plus capitales **, le tutoriel se finira par la choix de ta guilde.\n\
Tu recevras un message privé à l\'occasion !\n\n\
Je t\'ai ouvert le canal #『🤖』help , il répertorie toutes les connaissances du système de la coalition !\n\
**Ce sera donc à toi d\'enquêter, de découvrir les secrets de ce Discord.**\n\
> Fais ton propre tutoriel, apprends et cherche par toi-même.\n\n\
```Rien n\'a été mis au hasard```\n\
Chaque intitulé de canaux, de métiers, commandes, etc,... **est un mot clef à explorer**.\n\
Dans le rang help, il te suffira donc de poser des questions avec les mots que tu trouves sur le discord.\n\
__Pour me poser des questions__, il te suffira de commencer par un **!** d\'écrire un **mot clef** et de terminer par un **?**\n\
Si tu poses la bonne question, je t\'enverrai un message privé avec toutes les explications dont tu as besoin.\n\n\
```Exemple```\n\
Si tu fais la commande :\n\
**!**profil**?**\n\
> Je viendrais t\'expliquer les détails de la commande profil.\n\
**!**boutique**?**\n\
> Je viendrais t\'expliquer les détails du canal boutique.\n\
**!**donjon**?**\n\
> Explications sur la commande donjon.\n\n\
[:question:]  *Visite le canal #『🤖』help et pose toutes les questions que tu veux !*\n\
*Ensuite, reviens ici et fais la commande* :kissing:\n\
**!end**');
await channel_n.setTopic('Ceci est est une explication qui pourrait être utile !');

//--------------------------------------------


channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.Succès_id);
await channel_n.send(":gift:  **LISTE DES SUCCES**\n\
***- Bravo ! Vous avez réussis votre succès et gagné un nouveau pouvoir ! ***\n\n\
:scroll: **__1/ Succès like__** ::white_check_mark: \n\
> :third_place: Like **2** personnes\n\
> :second_place:Like **5** personnes\n\
> :first_place:Like **50** personnes\n\
> :medal: Like **120** personnes\n\n\
:trophy: **Rangs/pouvoirs débloqués :**\n\n\
:third_place: **Likeur de bronze**\n\
> *L'xp est désormais doublé lors de vos like*\n\
:second_place: **Likeur d'argent**.\n\
> *Vous pouvez like deux fois par jour* :heart:\n\
:first_place:**Likeur d'Or**\n\
> *Votre like rapporte désormais 2* :star:\n\
:medal:**Likeur de Platine**\n\
> *Tout les **3** likes vous gagnez un pts de* :droplet:");
//> *La perte de Mana passe de 2 à 1*\n\
//> *Le gain d'xp passe de 1 à 3.*\n\
//> *Le gain de :star: est doublée*\n\
//> *Vos bonus de succès se déclenchent même si vous n'êtes pas en possession du rang en question*\n\n\

await channel_n.send(":scroll: **__2/ Succès Recruteur __** ::white_check_mark: \n\
> :third_place:Recruter **1** personne\n\
> :second_place:Recruter **5** personnes\n\
> :first_place: Recruter **25** personnes\n\
> :medal: Recruter **50** personnes\n\n\
:trophy: **Rangs/pouvoirs débloqués :**\n\n\
:third_place:**Recruteur de bronze**\n\
> *La perte de Mana passe à 1*\n\
:second_place: **Recruteur d'argent**.\n\
> *Le gain d'xp passe de 1 à 3* :heart:\n\
:first_place:**Recruteur d'Or**\n\
> *Le gain de :star: est doublée*\n\
:medal:**Recruteur de Platine**.\n\
> *Vos bonus de succès se déclenchent même si vous n'êtes pas en possession du rang en question*\n\n\
:scroll: **__3/ Succès Espion __** : :white_check_mark: \n\
> :third_place:Faire **1** donjon\n\
> :second_place: Faire **20** donjon \n\
> :first_place: Faire **50** donjon \n\
> :medal: Faire **100** donjon \n\n\
:trophy: **Rangs/pouvoirs débloqués :**\n\n\
:third_place:**Espion de bronze**\n\
> *La perte de Mana passe de 2 à 1*\n\
:second_place: **Espion d'argent**.\n\
> *Le gain d'xp passe de 1 à 3.*\n\
:first_place:**Espion d'Or**\n\
> *Le gain de :star: est doublée*\n\
:medal:**Espion de Platine**.\n\
> *Vos bonus de succès se déclenchent même si vous n'êtes pas en possession du rang en question*\n\n\
:scroll: **__4/ Succès Muse __** :  :white_check_mark: \n\
> :third_place:Faire **1** skin/stuff.\n\
> :second_place: Faire **5** skin/stuff.\n\
> :first_place: Faire **25** skin/stuff.\n\
> :medal: Faire **50** skin/stuff.\n\n\
:trophy: **Rangs/pouvoirs débloqués :**\n\n\
:third_place:**Muse de bronze**\n\
> *La perte de Mana passe de 2 à 1*\n\
:second_place: **Muse d'argent**.\n\
> *Le gain d'xp passe de 1 à 3*\n\
:first_place:**Muse d'Or**\n\
> *Le gain de :star: est doublée*\n\
:medal:**Muse de Platine**.\n\
> *Vos bonus de succès se déclenchent même si vous n'êtes pas en possession du rang en question*");
await channel_n.send(":scroll: **__5/ Succès Attaquant__** :white_check_mark: \n\
> :third_place:Attaquer **1** perco\n\
> :second_place: Attaquer **5** perco\n\
> :first_place: Attaquer **25** perco\n\
> :medal: Attaquer **50** perco\n\
:trophy: **Rangs/pouvoirs débloqués :**\n\n\
:third_place:**Attaquant de bronze**\n\
> *La perte de Mana passe de 2 à 1*\n\
:second_place: **Attaquant d'argent**.\n\
> *Le gain d'xp passe de 1 à 3.*\n\
:first_place:**Attaquant d'Or**\n\
> *Le gain de :star: est doublée*\n\
:medal:**Attaquant de Platine**.\n\
> *Vos bonus de succès se déclenchent même si vous n'êtes pas en possession du rang en question*\n\n\
:scroll: **__ 6/ Succès Défenseur__** : :white_check_mark: \n\
> :third_place:Défendre **1** perco\n\
> :second_place: Défendre **5** perco\n\
> :first_place: Défendre **25** perco\n\
> :medal: Défendre **50** perco\n\n\
:trophy: **Rangs/pouvoirs débloqués :**\n\n\
:third_place:**Défenseur de bronze**\n\
> *La perte de Mana passe de 2 à 1*\n\
:second_place: **Défenseur d'argent**.\n\
> *Le gain d'xp passe de 1 à 3.*\n\
:first_place:**Défenseur d'Or**\n\
> *Le gain de :star: est doublée*\n\
:medal:**Défenseur de Platine**.\n\
> *Vos bonus de succès se déclenchent même si vous n'êtes pas en possession du rang en question*");

await channel_n.send(":scroll: **__7/ Succès Braconnier__** : :white_check_mark: \n\
> :third_place:Monter **50** dragodindes\n\
> :second_place: Monter **150** dragodindes\n\
> :first_place: Monter **500** dragodindes\n\
> :medal: Monter **800** dragodindes\n\
:trophy: **Rangs/pouvoirs débloqués :**\n\n\
:third_place:**Braconnier de bronze**\n\
> *La perte de Mana passe de 2 à 1*\n\
:second_place: **Braconnier d'argent**.\n\
> *Le gain d'xp passe de 1 à 3.*\n\
:first_place:**Braconnier d'Or**\n\
> *Le gain de :star: est doublée*\n\
:medal:**Braconnier de Platine**.\n\
> *Vos bonus de succès se déclenchent même si vous n'êtes pas en possession du rang en question*\n\n\
:scroll: **__ 8/ Succès Chercheur de Trésor__** : :white_check_mark: \n\
> :third_place:Trouver **3** perco\n\
> :second_place: Trouver **90** perco\n\
> :first_place: Trouver **200** perco\n\
> :medal: Trouver **400** perco\n\
:trophy: **Rangs/pouvoirs débloqués :**\n\n\
:third_place:**Chercheur de Trésor de bronze**\n\
> *La perte de Mana passe de 2 à 1*\n\
:second_place: **Chercheur de Trésor d'argent**.\n\
> *Le gain d'xp passe de 1 à 3.*\n\
:first_place:**Chercheur de Trésor d'Or**\n\
> *Le gain de :star: est doublée*\n\
:medal:**Chercheur de Trésor de Platine**.\n\
> *Vos bonus de succès se déclenchent même si vous n'êtes pas en possession du rang en question*");

channel_n.send(":scroll: **__9/ Succès Voleur__** : \n\
> :third_place: Voler **1** :star: \n\
> :second_place: Voler  **5** :star: \n\
> :first_place: Voler  **20** :star: \n\
> :medal: Voler **50** :star: \n\n\
:trophy: **Rangs/pouvoirs débloqués :**\n\
:third_place: **Voleur de bronze**\n\
> *Vous gagnez désormais de l'xp en faisant cette commande*\n\
:second_place: **Voleur d'argent**.\n\
> *Vous avez une chance de voler un* :droplet: \n\
:first_place:**Voleur d'Or**\n\
> *Vous avez plus de chance de voler 1* :star: \n\
:medal:**Voleur de Platine**.\n\
> *Vous pouvez désormais multiplier par 2 vos vols et dépouiller  les membres !*\n\
:scroll: **__ 10/ Succès Donateur__** :\n\
>  :third_place:Donner **1** :star: \n\
>  :second_place: Donner  **10** :star: \n\
>  :first_place: Donner  **50** :star: \n\
>  :medal: Donner **120** :star: \n\
:trophy: **Rangs/pouvoirs débloqués :**\n\
:third_place: **Donateur de bronze**\n\
> *Vous gagnez désormais un pt d'xp lorsque vous faites un don*\n\
:second_place: **Donateur d'argent**.\n\
> *Vous avez une chance de gagner 1* :droplet: \n\
:first_place:**Donateur d'Or**\n\
> *Vous avez une chance de gagner 1* :star: \n\
:medal:**Donateur de Platine**.\n\
> *Vous avez une infime chance de récupérer 50 % des étoiles que vous avez donné (1/50)*");

}

exports.fun_write_in_channels = fun_write_in_channels;
