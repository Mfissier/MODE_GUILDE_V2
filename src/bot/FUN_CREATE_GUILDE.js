const Discord = require('discord.js');
const client = new Discord.Client();

async function fun_args_check_mention_member_(args)
{
//___________________________________________..
    //  VARIABLE     ARGS.CONTENT;
    const name_of_guild = args[1];
    const name_of_meneur = args[2];
    const name_of_serveur = args[3];
    const kamas_guild = parseInt(args[4],10);
//___________________________________________...
        console.log(name_of_meneur);
        console.log(name_of_meneur.indexOf('@'));
        if(name_of_meneur.indexOf('@') == -1)
        {
            console.log('ERROR : !CREATEGUILDE (argument 2)\nLa mention @ n\'est pas accedable dans le nom du Meneur.\nLIGNE = fun_args_check_mention_member_ ');
            return(0);
        }
        return(1);
    //if(name_of_meneur)
}

async function fun_args_secure_command(message, args)
{
//___________________________________________..
    //  VARIABLE     ARGS.CONTENT;
    const name_of_guild = args[1];
    const name_of_meneur = args[2];
    const name_of_serveur = args[3];
    //___________________________________________...
//___________________________________________.

//___________________________________________..
    // Check nombre d'arguments dans la command args[arguments.txt,...]. 
    if (args.length > 5 || args.length < 5)
    {
                    //console.log(args.length);
        message.channel.send('ERROR *CREATE_GUILD*\nLe nombre d\'arguments n\'est pas respectés !');
        console.log('ERROR *CREATE_GUILD*\nLe nombre d\'arguments n\'est pas respectés !')
        return(1);
        // MESSAGE D'ERREUR;
    }

//___________________________________________..
    //__CHECK_MENTION_RANGS (true stop)
    // console.log(fun_args_check_mention_member_(args) == 1 + 'Retour de la fonction fun_args_check_mention_member');
    // if (await fun_args_check_mention_member_(args) == 1)
    // {
    //     message.channel.send('ERROR *CREATE_GUILD*\nLe nom du futur Meneur est incorrect!');
    //     return (1);
    // }
    // console.log('fun_args_secure = 0');

    return (0);



}

async function FUN_CREATE_GUILDE(message)
{
    args = message.content.split(/ +/g);
    if (await fun_args_secure_command(message, args) == true)
    {
        return(1);
    }
//____________ F O R _ D A T A ______________
    const name_of_guild = args[1].toLowerCase();
    const name_of_meneur = args[2];
    const name_of_serveur = args[3];
    const kamas_guild = parseInt(args[4],10);
    const name_of_category_guilde = name_of_guild + "[" + name_of_serveur + "]";
    //NAME_CHANNEL_CATEGORY_______________________
        DATA_ID_CATEGORY = '';
        DATA_ID_CHANNELS = '';
    //NAME_CHANNEL_CATEGORY_______________________

//____________ F O R _ D A T A ______________

//_______________________S T A N D _ B Y E _______________________
    try {
        await message.guild.roles.create({
                data: {
                name: name_of_guild,
                color: 'BLUE',
        },
        reason: 'Create a new guild' + name_of_guild + ' serveur =>' + name_of_serveur,
      });
                //SEARCH_NAME_ROLE_______________________
        roles_name = await message.guild.roles.cache.find(Role => Role.name === name_of_guild);
                //SEARCH_NAME_ROLE_______________________

                //ADD_RANG_TO_MENEUR_______________________
        await message.member.roles.add(roles_name);
                //ADD_RANG_TO_MENEUR_______________________

                //CREATE CATEGORY_______________________
        await message.guild.channels.create(name_of_category_guilde, {type: 'category'});
                //CREATE CATEGORY_______________________

                //SEARCH_NAME_CATEGORY_______________________
        DATA_ID_CATEGORY = await message.guild.channels.cache.find(Collection => Collection.name == name_of_category_guilde);
        await console.log(DATA_ID_CATEGORY.id, 'SDKJGDKGJDFLKGJDFLKJGDFKLJGKDLFJGDLFKJG');
                //SEARCH_NAME_CATEGORY_______________________

                //CREATE_CHANNEL_AND_SEARCH_______________________
        await message.guild.channels.create(name_of_guild, { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY});
        DATA_ID_CHANNELS = await message.guild.channels.cache.find(Collection => Collection.name == name_of_guild);
        await message.guild.channels.create('『💥』annonce' + name_of_category_guilde, { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY});
        DATA_ID_CHANNELS = await message.guild.channels.cache.find(Collection => Collection.name == name_of_guild);
        await message.guild.channels.create('『💭』général', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY});
        DATA_ID_CHANNELS = await message.guild.channels.cache.find(Collection => Collection.name == name_of_guild);
        await message.guild.channels.create('『🎈』évènement', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY});
        DATA_ID_CHANNELS = await message.guild.channels.cache.find(Collection => Collection.name == name_of_guild);
        await message.guild.channels.create('『💰』finances', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY});
        DATA_ID_CHANNELS = await message.guild.channels.cache.find(Collection => Collection.name == name_of_guild);
        await message.guild.channels.create('『⭐』all_rewards', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY});
        DATA_ID_CHANNELS = await message.guild.channels.cache.find(Collection => Collection.name == name_of_guild);
        await message.guild.channels.create('『❗』profil', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY});
        DATA_ID_CHANNELS = await message.guild.channels.cache.find(Collection => Collection.name == name_of_guild);
        await message.guild.channels.create('『⭐』boutique', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY});
        DATA_ID_CHANNELS = await message.guild.channels.cache.find(Collection => Collection.name == name_of_guild);
        await message.guild.channels.create('『⚡』command-grade', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY});
        DATA_ID_CHANNELS = await message.guild.channels.cache.find(Collection => Collection.name == name_of_guild);

                //SEARCH_CHANNEL_AND_SEARCH_______________________

    message.channel.send('**__Une guilde est en cours de creation :__**'+ '\nLe nom de la guilde : **' + args[1] + '**\nLe Meneur sera : '+ args [2] +  '\nLe nom du serveur : **'+ args[3] +'**\n' + '\nLa guilde possede **' + kamas_guild + '** de kamas dans son coffre !');
	} catch(e) {
		console.error(e);
    }

//_______________________S T A N D _ B Y E _______________________

//_______________________ T E S T _______________________

// collection.find({}).toArray((err, items) => {
//     if (err){
//          throw err;
//     } else {
//     // console.log(items)
//     }
//   })
// console.log(collection);
  //_______________________ T E S T _______________________

}

exports.FUN_CREATE_GUILDE = FUN_CREATE_GUILDE;