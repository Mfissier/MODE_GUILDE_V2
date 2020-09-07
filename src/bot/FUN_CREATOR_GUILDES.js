const Discord = require('discord.js');
const client = new Discord.Client();
const mongo = require("../../mongo");
const insert_guilde = require("../../mongo_communication/insert_guilde");
const insert_server = require("../../mongo_communication/insert_server");
const insert_parametre_guilde = require("../../mongo_communication/insert_parametre_guilde");
const insert_guilde_category_channels = require("../../mongo_communication/insert_guilde_category_channels");
const insert_parametre_super_admin = require("../../mongo_communication/insert_parametre_super_admin");
const insert_enclot = require("../../mongo_communication/insert_enclot");


async function fun_args_check_mention_member_(args){
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






async function FUN_CREATE_GUILDE(message) {
    
 //!GUILD_CREATE AQUA_TEST @ illyzael 989343 
    args = message.content.split(/ +/g);
    if (await fun_args_secure_command(message, args) == true)
    {
        return(1);
    }
//____________ F O R _ D A T A ______________
    const name_of_guild = args[1].toLowerCase();
    console.log(name_of_guild);
    const name_of_meneur = args[2];
    const name_of_serveur = args[3];
    const kamas_guild = parseInt(args[4],10);
    const name_of_category_guilde = name_of_guild + "[" + name_of_serveur + "]";
    const mention_futur_meneur = message.mentions.users.first();
    var role_guild;
    var role_meneur;
    var role_brasdroit;
    var role_conseiller;
    var role_staff;
    //NAME_CHANNEL_CATEGORY_______________________
        DATA_ID_CATEGORY = '';
        DATA_ID_CHANNELS = '';
        let tab_channel = [];
        ALL_NAME_OF_CHANNEL = [
                            '『🚨』annonce',  
                            '『📜』règlement', // !!!PAS INCLUS
                            '『💰』finances',
                            '『💱』transferts',
                            '『🏆』all_rewards',
                            '____________________', // !!! AJOUTER
                            '『💭』général',
                            '『🎉』events', // !!!CHANGER LE NOM
                            '『🎭』profil', // !!!CHANGER LE NOM
                            '『🛒』boutique', // !!!CHANGER LE NOM
                            '『🐎』enclos', // !!!CHANGER LE NOM
                            '『💀』la-purge', // 
                            '『🏛』tribunal',
                            '____________________', // !!! inclus
                            '『⚡』command',
                            '『🏅』rangs', // !!! CHANGER LE NOM
                            '『❓』questions',
                            '『📌』liens_pratiques', // !!! AJOUTER
                            '____________________', // !!! AJOUTER
                            '『👥』staff', // CHANGER LE NOM
                            '『📋』projet', // CHANGER LE NOM
                            '『📊』gestion', // CHANGER LE NOM
                            '『✅』staff-mission',
                            '『❗』command-staff',
                            '『💻』terminal' // CHANGER LE NOM
                            ]
    
    //NAME_CHANNEL_CATEGORY_______________________

//____________ F O R _ D A T A ______________


//______________ZONE_TEST_______________________
//---------------------------------------------


//_______________________S T A N D _ B Y E _______________________
    try {
        
        //___________________CREATE_ALL_ROLE_FOR_GUILDE_____________________
            await message.guild.roles.create({
                data: {
                name: name_of_guild,
                color: 'BLUE',
                permissions : ["ADD_REACTIONS"],
                hoist : true,
                mentionable: true,
                
        },
        reason: 'Create a new guild' + name_of_guild + ' serveur =>' + name_of_serveur,
      });

            await message.guild.roles.create({
                data: {
                name: "MENEUR [" + name_of_guild + "]",
                color: 'BLUE',
                permissions : ["ADD_REACTIONS",'CREATE_INSTANT_INVITE','MENTION_EVERYONE', 'MUTE_MEMBERS', 'MOVE_MEMBERS'],
                hoist : true,
                mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });
            await message.guild.roles.create({
                data: {
                name: "BRASDROIT[" + name_of_guild + "]",
                color: 'BLUE',
                permissions : ["ADD_REACTIONS",'CREATE_INSTANT_INVITE','MENTION_EVERYONE', 'MUTE_MEMBERS', 'MOVE_MEMBERS'],
                hoist : true,
                mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });
            await message.guild.roles.create({
                data: {
                name: "CONSEILLER[" + name_of_guild + "]",
                color: 'BLUE',
                permissions : ["ADD_REACTIONS",'CREATE_INSTANT_INVITE','MENTION_EVERYONE', 'MUTE_MEMBERS', 'MOVE_MEMBERS'],
                hoist : true,
                mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });
            await message.guild.roles.create({
                data: {
                name: "STAFF [" + name_of_guild + "]",
                color: 'BLUE',
                permissions : ["ADD_REACTIONS",'CREATE_INSTANT_INVITE','MUTE_MEMBERS', 'MOVE_MEMBERS'],
                hoist : true,
                mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });

        //___________________CREATE_ALL_ROLE_FOR_GUILDE_____________________


//SEARCH_NAME_ROLE_______________________
        
        role_guild =        await message.guild.roles.cache.find(Role => Role.name === name_of_guild);
        role_meneur =       await message.guild.roles.cache.find(Role => Role.name === "MENEUR [" + name_of_guild + "]");
        role_brasdroit =    await message.guild.roles.cache.find(Role => Role.name === "BRASDROIT[" + name_of_guild + "]");
        role_conseiller =   await message.guild.roles.cache.find(Role => Role.name === "CONSEILLER[" + name_of_guild + "]");
        role_staff =        await message.guild.roles.cache.find(Role => Role.name === "STAFF [" + name_of_guild + "]");

        //!!!> Mettre les rangs dans un tableau

//SEARCH_NAME_ROLE_______________________

//ADD_RANG_TO_MENEUR_______________________

        await   message.member.guild.members.cache.find(Collection => Collection.id === mention_futur_meneur.id).roles.add(role_guild);
        await   message.member.guild.members.cache.find(Collection => Collection.id === mention_futur_meneur.id).roles.add(role_meneur);
        await   message.member.guild.members.cache.find(Collection => Collection.id === mention_futur_meneur.id).roles.add(role_staff);

//ADD_RANG_TO_MENEUR_______________________

//CREATE CATEGORY_______________________
        await   message.guild.channels.create(name_of_category_guilde, {type: 'category'});
//CREATE CATEGORY_______________________

//SEARCH_NAME_CATEGORY_______________________
        DATA_ID_CATEGORY = await message.guild.channels.cache.find(Collection => Collection.name == name_of_category_guilde);
//SEARCH_NAME_CATEGORY_______________________

//CREATE_CHANNEL_AND_SEARCH_______________________

        await   message.guild.channels.create('『🚨』annonce', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
            permissionOverwrites: [
                {
                    id: role_guild,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
                    deny : ['SEND_MESSAGES'],
                },
                {
                    id: role_meneur,
                    allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
                },
                {
                    id: role_brasdroit,
                    allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
                },
                {
                    id: role_conseiller,
                    allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY'],
                    deny : ['SEND_MESSAGES'],
                },
            ],
        });
        
        await   message.guild.channels.create('『📜』règlement', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
        permissionOverwrites: [
            {
                id: role_guild,
                allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'],
                deny : ['SEND_MESSAGES'],
            },
            {
                id: role_meneur,
                allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY'],
                deny : ['SEND_MESSAGES'],
            },
            {
                id: role_brasdroit,
                allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY'],
                deny : ['SEND_MESSAGES'],
            },
            {
                id: role_conseiller,
                allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY'],
                deny : ['SEND_MESSAGES'],
            },
        ],
    });
    await   message.guild.channels.create('『💰』finances', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
    permissionOverwrites: [
        {
            id: role_guild,
            allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'],
            deny : ['SEND_MESSAGES'],
        },
        {
            id: role_meneur,
            allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY'],
            deny : ['SEND_MESSAGES'],
        },
        {
            id: role_brasdroit,
            allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY'],
            deny : ['SEND_MESSAGES'],
        },
        {
            id: role_conseiller,
            allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY'],
            deny : ['SEND_MESSAGES'],
        },
    ],
    
    });
    await   message.guild.channels.create('『💱』transferts', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
    permissionOverwrites: [
        {
            id: role_guild,
            allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
            deny : ['SEND_MESSAGES'],
        },
        {
            id: role_meneur,
            allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
        },
        {
            id: role_brasdroit,
            allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
            // deny : ['SEND_MESSAGES'],
        },
        {
            id: role_conseiller,
            allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
            // deny : ['SEND_MESSAGES'],
        },
    ],
    });
    await   message.guild.channels.create('『🏆』all_rewards', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
    permissionOverwrites: [
        {
            id: role_guild,
            allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
            deny : ['SEND_MESSAGES'],
        },
        {
            id: role_meneur,
            allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
        },
        {
            id: role_brasdroit,
            allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
            deny : ['SEND_MESSAGES'],
        },
        {
            id: role_conseiller,
            allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY'],
            deny : ['SEND_MESSAGES'],
        },
    ],
    });
    await   message.guild.channels.create('____________________', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
    permissionOverwrites: [
        {
            id: role_guild,
            allow: ['VIEW_CHANNEL'],
            deny : ['SEND_MESSAGES'],
        },
        {
            id: role_meneur,
            allow: ['VIEW_CHANNEL'],
            deny : ['SEND_MESSAGES'],
        },
        {
            id: role_brasdroit,
            allow: ['VIEW_CHANNEL'],
            deny : ['SEND_MESSAGES'],
        },
        {
            id: role_conseiller,
            allow: ['VIEW_CHANNEL'],
            deny : ['SEND_MESSAGES'],
        },
    ],
    });
    await   message.guild.channels.create('『💭』général', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
    permissionOverwrites: [
        {
            id: role_guild,
            allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS','SEND_MESSAGES'],
            //deny : ['SEND_MESSAGES'],
        },
        {
            id: role_meneur,
            allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
        },
        {
            id: role_brasdroit,
            allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
        },
        {
            id: role_conseiller,
            allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
            //deny : ['SEND_MESSAGES'],
        },
    ],
    });
    await   message.guild.channels.create('『🎉』events', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
    permissionOverwrites: [
        {
            id: role_guild,
            allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
            deny : ['SEND_MESSAGES'],
        },
        {
            id: role_meneur,
            allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
        },
        {
            id: role_brasdroit,
            allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
        },
        {
            id: role_conseiller,
            allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY', 'SEND_MESSAGES'],
            // deny : ['SEND_MESSAGES'],
        },
    ],
});
await   message.guild.channels.create('『🎭』profil', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
],
});
await   message.guild.channels.create('『🛒』boutique', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    // Rajotuer permission au Meneur de voir tout les channels... Tout faire dessus.
],
});
await   message.guild.channels.create('『🐎』enclos', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    // Rajotuer permission au Meneur de voir tout les channels... Tout faire dessus.
],
}); 
await   message.guild.channels.create('『💀』la-purge', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY,
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
],
});
await   message.guild.channels.create('『🏛』tribunal', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY,
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY'],
        deny : ['SEND_MESSAGES'],
    },
],
});
await   message.guild.channels.create('____________________', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL'],
        deny : ['SEND_MESSAGES'],
    },
],
});
await   message.guild.channels.create('『⚡』command', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    // Rajotuer permission au Meneur de voir tout les channels... Tout faire dessus.
],
});
await   message.guild.channels.create('『🏅』rangs', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY,
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY'],
        deny : ['SEND_MESSAGES'],
    },
],
});
await   message.guild.channels.create('『❓』questions', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY,
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
],
});
await   message.guild.channels.create('『📌』liens_pratiques', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY,
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        deny : ['SEND_MESSAGES'],
    },
],
});
await   message.guild.channels.create('____________________', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL'],
        deny : ['SEND_MESSAGES'],
    },
],
});
await   message.guild.channels.create('『👥』staff', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
],
});
await   message.guild.channels.create('『📋』projet', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY,
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['ADD_REACTIONS'],
        deny : ['SEND_MESSAGES','VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
],
});
await   message.guild.channels.create('『📊』gestion', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY,
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['ADD_REACTIONS'],
        deny : ['SEND_MESSAGES','VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
],
});
await   message.guild.channels.create('『✅』staff-mission', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY,
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','SEND_MESSAGES','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },

],
});
await   message.guild.channels.create('『❗』command-staff', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL','MANAGE_MESSAGES','ADD_REACTIONS','MENTION_EVERYONE','READ_MESSAGE_HISTORY'],
        deny : ['SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL','ADD_REACTIONS','READ_MESSAGE_HISTORY'],
        deny : ['SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
],
});
await   message.guild.channels.create('『💻』terminal', { reason: 'Nouveau channel pour la guilde' + name_of_guild , parent: DATA_ID_CATEGORY, 
permissionOverwrites: [
    {
        id: role_guild,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_meneur,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
        deny : ['SEND_MESSAGES'],
    },
    {
        id: role_brasdroit,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
        deny : ['SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
    {
        id: role_conseiller,
        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'],
        deny : ['SEND_MESSAGES'],
        // deny : ['SEND_MESSAGES'],
    },
],
});


//CREATE_CHANNEL_AND_SEARCH_______________________

// SEARCH_CHANNEL_______________________
        for (let i = 0; i < ALL_NAME_OF_CHANNEL.length; i++)
        {
            tab_channel[i] = await message.guild.channels.cache.find(Collection => Collection.name == ALL_NAME_OF_CHANNEL[i]).id;
            
        }

        /////////////////////////////////////////////////  CHECK DATA FOR INSERT /////////////////////////////////////////////////////////////

//server_id => serveur 
//user_chef_id => 
//channels_id => guilde_category_channels
//guilde_category_id => guilde_category_id
//admin_id => parametre_super_admin

var data_server = mongo.getDb().collection("server");
var data_guilde_category = mongo.getDb().collection("guilde_category");
var data_parametre_guilde = mongo.getDb().collection("parametre_guilde");
var data_guilde_category_channel = mongo.getDb().collection("guilde_category_channels");
var data_parametre_super_admin = mongo.getDb().collection("parametre_super_admin");
var data_enclot = mongo.getDb().collection("enclot");
var data_users = mongo.getDb().collection("users");

var db_server_id;
var db_guilde_category_id;



//_________CHECK_AND_INClUDE_DATA_SERVER______________

data_server.find({name : name_of_serveur}).toArray((err, items)  => 
{
    // console.log(items[0]._id);
    if (err)
    {
        console.log(err);
        throw err;
    } 
    else if (items[0] != undefined) 
    {
        db_server_id = items[0]._id;
        console.log(db_server_id + "existe");
    }
    else 
    {
        insert_server.insert_server(name_of_serveur);

        data_server.find({name : name_of_serveur}).toArray((err, items) => 
        {
            console.log(items);
            if (err)
            {
                throw err;
            } 
            else
            {
                // console.log(items);
                db_server_id = items[0]._id;

                var p_id = role_guild.id;
                var p_name = name_of_category_guilde;
                var p_server_id = db_server_id;
                var p_rang_category = DATA_ID_CATEGORY.id;
                var p_user_chef_id = mention_futur_meneur.id;
                var p_channels_id = tab_channel;
                
                //_________CHECK_AND_INCLUDE_DATA_GUIDE______________
                data_guilde_category.find({id : role_guild.id}).toArray((err, items) => {
                    if (err){
                       throw err;
                    }
                    else {
                        insert_guilde.insert_guilde(
                            p_id,
                            p_name,
                            p_server_id,
                            p_rang_category,
                            p_user_chef_id,
                            p_channels_id,
                    );
                    }
                });

                var p_name = ALL_NAME_OF_CHANNEL; 
                var p_name_id = tab_channel;
                var p_type = 'channel'; 
                var p_rang_channel = role_guild.id;
                var p_template_status = false;
                var p_commande_status = false;
                var p_boutique_status = false;
                var p_bot_annonce_status = true;
                var p_bot_annonce_stars_status = false;
                var p_tuto_status = false;
                var p_guilde_category_id = DATA_ID_CATEGORY.id;
                var p_server_id = 'empty';


                console.log("TRUC ================");
                data_guilde_category_channel.find({name_id : tab_channel[0]}).toArray((err, items) => {
                    if (err){
                    throw err;
                    } else if (items[0] != undefined) {
                        console.log('Le channel existe déjà')
                    }
                    else {
                        insert_guilde_category_channels.insert_guilde_category_channels(
                            p_name,
                            p_name_id,
                            p_type,
                            p_rang_channel,
                            p_template_status,
                            p_commande_status,
                            p_boutique_status,
                            p_bot_annonce_status,
                            p_bot_annonce_stars_status,
                            p_tuto_status,
                            p_guilde_category_id,
                            p_server_id
                            );
                    }

                });
                        // db_guilde_category_channel = items[0]._id;
            }
        })
    }
});

// MANQUE GUILDE CATEGORY_ID
// MANQUE PARAMETRE_GUILDE

data_parametre_guilde.find({name : name_of_serveur}).toArray((err, items)  => 
{
    if (err)
    {
        console.log(err);
        throw err;
    } 
    else if (items[0] != undefined) 
    {
        db_server_id = items[0]._id;
        console.log(data_parametre_guilde+ "existe");
    }
    else 
    {

        p_name = name_of_category_guilde;
        p_name_id = role_guild.id;
        data_guilde_category = DATA_ID_CATEGORY.id;
        data_server = name_of_serveur;
        p_tab_channel = tab_channel
        p_annonce_channels_id = tab_channel[0];
        p_chef_id = mention_futur_meneur.id;
        data_parametre_super_admin = "empty";
        p_kama_guild = kamas_guild;
        data_enclot = "empty";

        insert_parametre_guilde.insert_parametre_guilde(
            p_name,
            p_name_id,
            data_guilde_category, 
            data_server,
            p_tab_channel,
            p_annonce_channels_id,
            p_chef_id,
            data_parametre_super_admin,
            p_kama_guild,
            data_enclot,
        );

    }
});
//  await message.channel.send('**!INFORMATION_GUILDE_CREATE_DATA** ' + role_guild.id);
//await message.channel.send('*En attente de l\'initialisation des données...');








// console.log(ALL_NAME_OF_CHANNEL[0] + name_of_category_guilde)

// console.log(ALL_NAME_OF_CHANNEL[0]);




//________CHECK_AND_INCLUDE_DATA_CATEGORY_CHANNEL____________
	} catch(e) {
        console.error(e);
    }
// SEARCH_CHANNEL________________________

    
    // message.channel.send('!channel_all_delete')
    // !!!> AUTO_DELETE_CHANNEL()


// MESSAGE_FOR_FINISHED_CREATE_GUILDE_TO_DISCORD_________________________ 
  message.channel.send('**__Une guilde est en cours de creation :__**'+ '\nLe nom de la guilde : **' + args[1] + '**\nLe Meneur sera : '+ args [2] +  '\nLe nom du serveur : **'+ args[3] +'**\n' + '\nLa guilde possede **' + kamas_guild + '** de kamas dans son coffre !');
// MESSAGE_FOR_FINISHED_CREATE_GUILDE_TO_DISCORD_________________________



console.log('MAMAN DE MAX!!!!!!!!!!!');



}

exports.FUN_CREATE_GUILDE = FUN_CREATE_GUILDE;



// var db_parametre_super_admin;
// data_parametre_super_admin.find({name : name_of_serveur}).toArray((err, items) => {
//     if (err){
//        throw err;
//     } else if (items[0] != undefined) {
//         console.log("ERROR_DATA_SEARCH : data_parametre_super_admin");
//         //!!!> REPLACER CETTE SECURISATION EN HAUT DU CODE.
//         return;
//     }
//     else {
//         db_parametre_super_admin = items[0]._id;
//     }
// });

// var db_enclot;
// data_enclot.find({name : name_of_guild}).toArray((err, items) => {
//     if (err){
//        throw err;
//     } else if (items[0] != undefined) {
//         console.log("ERROR_DATA_SEARCH : data_enclos");
//         //!!!> REPLACER CETTE SECURISATION EN HAUT DU CODE.
//         return;
//     }
//     else {
//         db_enclot = items[0]._id;
//     }
// });
// //_____________________________CHECK AND TAKE _ID CATEGORY MONGODB______________________





//                 //_____________INSERT_GUILDE_CATEGORY______________________

// //____P_DATA_IN_GUILDE_CATEGORY_CHANNELS____
// //____P_DATA_IN_GUILDE_CATEGORY_CHANNELS____

// insert_guilde_category_channels.inset_guilde_category_channels(
//     p_name,
//     p_type,
//     p_rang_channel,
//     p_template_status, //true
//     p_commande_status, //false
//     p_boutique_status, // false,
//     p_bot_annonce_status,// false,
//     p_bot_annonce_stars_status, // false,
//     p_tuto_status, // false,
//     p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
//     p_server_id, //  '  5e9ee9562924fb0000734186',
//     );

// //____P_DATA_IN_GUILDE_PARAMETRE_GUILDE_____
// //____P_DATA_IN_GUILDE_PARAMETRE_GUILDE_____


// insert_parametre_super_admin.insert_parametre_super_admin(

// );

// insert_enclot.insert_enclot(
//     p_name,//  "enclot 1",
//     p_enclot_status,// true,
//     p_guilde_category, // "5e94562d1c9d4400001b9962",
//     p_prix, // 44,
//     p_map, // "Le monde de Jesus",
//     p_position_x, // 0,
//     p_position_y, // 0,
//     p_taille,  //  2,
// );



