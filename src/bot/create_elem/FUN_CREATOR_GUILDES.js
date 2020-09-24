const Discord = require('discord.js');
const client = new Discord.Client();
const data_register = require('../data/save_in_data_guild');
let data_guilde = require('../data/structjson/guild.json');
var fs = require('fs');
let mkdir = require('../data/mkdir');
const { JSONCookie } = require('cookie-parser');
async function FUN_CREATE_GUILDE(message) {    
    // 1° AJOUTER UNE SECURITE POUR QUE SEUL L'ADMIN PUISSE FAIRE CETTE COMMAND !!!
    // 2° CREATION DES RANGS METIER DE LA GUILDE SI IL N'EXISTE PAS. (FAIRE UN CHECK).
    // 3° FAIRE DES MESSAGE DE SUIVIS DE LA COMMAND
    // 4° FAIRE EN SORTE QUE LA SAUVEGARDE AILLE SUR UN AUTRE DOSSIER SI IL S'AGIT D'UNE AUTRE GUILDE.

 //node
args = message.content.split(/ +/g);
//____________ F O R _ D A T A ______________
    const name_of_guild = args[1].toLowerCase();
    const name_of_meneur = args[2];
    const name_of_serveur = args[3];
    const kamas_guild = parseInt(args[4],10);
    const name_of_category_guilde = name_of_guild + "[" + name_of_serveur + "]";
    const mention_futur_meneur = message.mentions.users.first();
    //console.log(message.member!guilde_create POMPO  @Blodious  Iblablalba 1000000!guilde_create POMPO  @Blodious  Iblablalba 1000000.user.id);
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
                            '『📜』règlement', 
                            '『💰』finances',
                            '『💱』transferts',
                            '『🏆』all_rewards',
                            '____________________', 
                            '『💭』général',
                            '『🎉』events', 
                            '『🎭』profil', 
                            '『🛒』boutique', 
                            '『🐎』enclos', 
                            '『💀』la-purge',  
                            '『🏛』tribunal',
                            '____________________', 
                            '『⚡』command',
                            '『🏅』rangs',  
                            '『❓』questions',
                            '『📌』links', 
                            '____________________', 
                            '『👥』staff',  
                            '『📋』projet',  
                            '『📊』gestion',  
                            '『✅』staff-mission',
                            '『❗』command-staff',
                            '『💻』terminal'  
                            ]
    
    //NAME_CHANNEL_CATEGORY_______________________

//____________ F O R _ D A T A ______________


//______________ZONE_TEST_______________________
//---------------------------------------------


//_______________________S T A N D _ B Y E _______________________
    try {
    await message.channel.send('**🔋CHARGEMENT... 10 %🔋**\nCreation des roles administrateurs !\n\n');
        //___________________CREATE_ALL_ROLE_FOR_GUILDE_____________________
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
        //___________________CREATE_ALL_ROLE_FOR_GUILDE_____________________


//SEARCH_NAME_ROLE_______________________   
        
        role_guild =        await message.guild.roles.cache.find(Role => Role.name === name_of_guild);
        role_meneur =       await message.guild.roles.cache.find(Role => Role.name === "MENEUR [" + name_of_guild + "]");
        role_brasdroit =    await message.guild.roles.cache.find(Role => Role.name === "BRASDROIT[" + name_of_guild + "]");
        role_conseiller =   await message.guild.roles.cache.find(Role => Role.name === "CONSEILLER[" + name_of_guild + "]");
        role_staff =        await message.guild.roles.cache.find(Role => Role.name === "STAFF [" + name_of_guild + "]");
//!!!> 

//SEARCH_NAME_ROLE_______________________

//ADD_RANG_TO_MENEUR_______________________

        await   message.member.guild.members.cache.find(Collection => Collection.id === mention_futur_meneur.id).roles.add(role_guild);
        await   message.member.guild.members.cache.find(Collection => Collection.id === mention_futur_meneur.id).roles.add(role_meneur);
        await   message.member.guild.members.cache.find(Collection => Collection.id === mention_futur_meneur.id).roles.add(role_staff);
        await message.channel.send('**🔋CHARGEMENT... 35 %🔋**\nAjout du role **Meneur** à <@!'+ mention_futur_meneur.id + '> !\n\n' );
//ADD_RANG_TO_MENEUR_______________________

//CREATE CATEGORY_______________________
        await   message.guild.channels.create(name_of_category_guilde, {type: 'category'});
//CREATE CATEGORY_______________________

//SEARCH_NAME_CATEGORY_______________________
        DATA_ID_CATEGORY = await message.guild.channels.cache.find(Collection => Collection.name == name_of_category_guilde);
        data_guilde.category_guild[0] = DATA_ID_CATEGORY.id;
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
await message.channel.send('**🔋CHARGEMENT... 60 %🔋\n**Ajout des channels et mise en place des permissions des rangs**\n\n');
    let search = await message.channel.guild.channels.cache.map(Collection => Collection.id);
    let id_channel = [];
    for(let i = 0; i < search.length; i++)
       id_channel[i] = await message.guild.channels.cache.find(Collection => Collection.id == search[i]);

 




    await message.channel.send('**🔋CHARGEMENT... 75 %🔋**\nSauvegarde des channels dans la data de la guilde ' + name_of_guild + ' !\n\n');
    if (message.guild.roles.cache.find(Collection => Collection.name == 'ESPION') == undefined)
    {  
        message.channel.send('**🔋CHARGEMENT... 77 %🔋**\nLes roles de bases n\'ont pas été créés !');

        await message.guild.roles.create({
            data: {
            name: "__________________________",
            color: 'WHITE',
            hoist : true,
            mentionable: true,
      },
      reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });
        await message.guild.roles.create({
              data: {
              name: "TRESORIER",
              color: 'GOLD',
              hoist : true,
              mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
        });
        await message.guild.roles.create({
              data: {
              name: "PROTECTEUR",
              color: 'GOLD',
              hoist : true,
              mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
        });
        await message.guild.roles.create({
              data: {
              name: "CHERCHEUR DE TRESOR",
              color: 'GOLD',
              hoist : true,
              mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
        });
        await message.guild.roles.create({
              data: {
              name: "SECRETAIRE",
              color: 'GOLD',
              hoist : true,
              mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
        });
        await message.guild.roles.create({
              data: {
              name: "RECRUTEUR",
              color: 'GOLD',
              hoist : true,
              mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
        });
        await message.guild.roles.create({
              data: {
              name: "TUEUR DE PERCEPTEUR",
              color: 'GOLD',
              hoist : true,
              mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
        });
        await message.guild.roles.create({
              data: {
              name: "GUIDE",
              color: 'GOLD',
              hoist : true,
              mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
        });
        await message.guild.roles.create({
              data: {
              name: "ESPION",
              color: 'GOLD',
              hoist : true,
              mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
        });
        await message.guild.roles.create({
              data: {
              name: "BRACONNIER",
              color: 'GOLD',
              hoist : true,
              mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
        });
        await message.guild.roles.create({
              data: {
              name: "APPRENTIE",
              color: 'GOLD',
              hoist : true,
              mentionable: true,
        },
        reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
        });

        await message.guild.roles.create({
            data: {
            name: "PENITENT",
            color: 'GOLD',
            hoist : true,
            mentionable: true,
      },
      reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });
      await message.guild.roles.create({
            data: {
            name: "BOULET",
            color: 'GOLD',
            hoist : true,
            mentionable: true,
      },
      reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });
      await message.guild.roles.create({
            data: {
            name: "RESERVISTE",
            color: 'GOLD',
            hoist : true,
            mentionable: true,
      },
      reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });
      await message.guild.roles.create({
            data: {
            name: "ESPION",
            color: 'GOLD',
            hoist : true,
            mentionable: true,
      },
      reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });
      await message.guild.roles.create({
            data: {
            name: "ESSAI",
            color: 'GOLD',
            hoist : true,
            mentionable: true,
      },
      reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });
      await message.guild.roles.create({
            data: {
            name: "DESERTEUR",
            color: 'GOLD',
            hoist : true,
            mentionable: true,
      },
      reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });
      await message.guild.roles.create({
            data: {
            name: "INITIE",
            color: 'GOLD',
            hoist : true,
            mentionable: true,
      },
      reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });
    
    await message.guild.roles.create({
            data: {
            name: "ARTISAN",
            color: 'GOLD',
            hoist : true,
            mentionable: true,
      },
      reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
    });

    await message.guild.roles.create({
            data: {
            name: "MASCOTTE",
            color: 'GOLD',
            hoist : true,
            mentionable: true,
      },
      reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
    });

    await message.guild.roles.create({
            data: {
            name: "MEMBRE NON GUILDE",
            color: 'GOLD',
            hoist : true,
            mentionable: true,
      },
      reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });

    await message.guild.roles.create({
            data: {
            name: "NOUVEAU",
            color: 'GOLD',
            hoist : true,
            mentionable: true,
        },
      reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
      });

    await message.guild.roles.create({
            data: {
            name: "__________________________",
            color: 'WHITE',
            hoist : true,
            mentionable: true,
        },
          reason: 'Create ' + name_of_guild + ' serveur =>' + name_of_serveur,
        });
    }
    else
        message.reply('Les roles de bases sont déjà créés !');
        await message.channel.send('**🔋CHARGEMENT... 100 %🔋**\nCréation de la guilde ' + name_of_guild + ' terminée !\n\n');

        
        let index_channel_start;
        for(let i = 0; i < search.length; i++){
            if (id_channel[i] == DATA_ID_CATEGORY){
                index_channel_start = i;
                break;
            }           
        }
        let path = __dirname + '/../data/Save/data_guild/'
        let search_path = name_of_guild;
        fs.readdir(path, (err, files) => {
               for(let i = 0; i < files.length; i++)
               {
                   if (files[i] == search_path)
                   {
                       console.log('Cette guilde a deja été sauvegarde !');
                       return;
                   }
               }
                   // Rajouter le bonne index pour la structure si il y a deja une guilde de creer.
                    data_guilde.guild[files.length - 1]                 =  role_guild.id;
                    data_guilde.category_guild[files.length - 1]        =  DATA_ID_CATEGORY.id; 
                    data_guilde.rolemeneur[files.length - 1]            =  role_meneur.id;
                    data_guilde.user_meneur[files.length - 1]           =  mention_futur_meneur.id;
                    data_guilde.brasdroit[files.length - 1]             =  role_brasdroit.id;
                    data_guilde.conseiller[files.length - 1]            =  role_conseiller.id;
                    data_guilde.staff[files.length - 1]                 =  role_staff.id;
                    data_guilde.coffre_guild[files.length - 1]          =  kamas_guild;
                    data_guilde.name_guild[files.length - 1]            =  name_of_guild;
                    data_guilde.chef[files.length - 1]                  = message.member.user.id;
                    data_guilde.channel_annonce[files.length - 1]       = id_channel[index_channel_start + 1].id;
                    data_guilde.channel_règlement[files.length - 1]     = id_channel[index_channel_start + 2].id;
                    data_guilde.channel_finances[files.length - 1]      = id_channel[index_channel_start + 3].id;
                    data_guilde.channel_transferts[files.length - 1]    = id_channel[index_channel_start + 4].id;
                    data_guilde.channel_all_rewards[files.length - 1]   = id_channel[index_channel_start + 5].id;
                    data_guilde.channel_général[files.length - 1]       = id_channel[index_channel_start + 7].id;
                    data_guilde.channel_events[files.length - 1]        = id_channel[index_channel_start + 8].id;
                    data_guilde.channel_profil[files.length - 1]        = id_channel[index_channel_start + 9].id;
                    data_guilde.channel_boutique[files.length - 1]      = id_channel[index_channel_start + 10].id;
                    data_guilde.channel_enclos[files.length - 1]        = id_channel[index_channel_start + 11].id;
                    data_guilde.channel_la_purge[files.length - 1]      = id_channel[index_channel_start + 12].id;
                    data_guilde.channel_tribunal[files.length - 1]      = id_channel[index_channel_start + 13].id;
                    data_guilde.channel_command[files.length - 1]       = id_channel[index_channel_start + 15].id;
                    data_guilde.channel_rangs[files.length - 1]         = id_channel[index_channel_start + 16].id;
                    data_guilde.channel_questions[files.length - 1]     = id_channel[index_channel_start + 17].id;
                    data_guilde.channel_links[files.length - 1]         = id_channel[index_channel_start + 18].id;
                    data_guilde.channel_staff[files.length - 1]         = id_channel[index_channel_start + 20].id;
                    data_guilde.channel_projet[files.length - 1]        = id_channel[index_channel_start + 21].id;
                    data_guilde.channel_gestion[files.length - 1]       = id_channel[index_channel_start + 22].id;
                    data_guilde.channel_staff_mission[files.length - 1] = id_channel[index_channel_start + 23].id;
                    data_guilde.channel_command_staff[files.length - 1] = id_channel[index_channel_start + 24].id;
                    data_guilde.nbr_total_star[files.length - 1]        = 0;

                    data_guilde.channel_terminal[files.length - 1]      = id_channel[index_channel_start + 25].id;
               console.log(data_guilde.channel_terminal[files.length - 1]);
               mkdir.mkdir(path + name_of_guild);
               fs.writeFileSync(path + name_of_guild + '/guild.txt',  data_guilde.guild[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/rolemeneur.txt',  data_guilde.rolemeneur[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/user_meneur.txt',  data_guilde.user_meneur[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/brasdroit.txt',  data_guilde.brasdroit[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/conseiller.txt',  data_guilde.conseiller[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/staff.txt',  data_guilde.staff[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/coffre_guild.txt',  data_guilde.coffre_guild[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/name_guild.txt',  data_guilde.name_guild[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/chef.txt',  data_guilde.chef[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_annonce.txt',  data_guilde.channel_annonce[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_règlement.txt',  data_guilde.channel_règlement[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_finances.txt',  data_guilde.channel_finances[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_transferts.txt',  data_guilde.channel_transferts[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_all_rewards.txt',  data_guilde.channel_all_rewards[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_général.txt',  data_guilde.channel_général[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_events.txt',  data_guilde.channel_events[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_profil.txt',  data_guilde.channel_profil[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_boutique.txt',  data_guilde.channel_boutique[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_enclos.txt',  data_guilde.channel_enclos[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_la_purge.txt',  data_guilde.channel_la_purge[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_tribunal.txt',  data_guilde.channel_tribunal[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_command.txt',  data_guilde.channel_command[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_rangs.txt',  data_guilde.channel_rangs[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_questions.txt',  data_guilde.channel_questions[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_links.txt',  data_guilde.channel_links[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_staff.txt',  data_guilde.channel_staff[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_projet.txt',  data_guilde.channel_projet[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_gestion.txt',  data_guilde.channel_gestion[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_staff_mission.txt',  data_guilde.channel_staff_mission[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_command_staff.txt',  data_guilde.channel_command_staff[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/channel_terminal.txt',  data_guilde.channel_terminal[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/nbr_total_star.txt',  data_guilde.nbr_total_star[files.length - 1], (err)=>{if (err) console.log("An error happened");});
               fs.writeFileSync(path + name_of_guild + '/category_guild.txt',  data_guilde.category_guild[files.length - 1], (err)=>{if (err) console.log("An error happened");});
           });
	} catch(e) {
        console.error(e);
    }
    message.channel.send('**__Une guilde est en cours de creation :__**'+ '\nLe nom de la guilde : **' + args[1] + '**\nLe Meneur sera : '+ args [2] +  '\nLe nom du serveur : **'+ args[3] +'**\n' + '\nLa guilde possede **' + kamas_guild + '** de kamas dans son coffre !');
}
exports.FUN_CREATE_GUILDE = FUN_CREATE_GUILDE;
