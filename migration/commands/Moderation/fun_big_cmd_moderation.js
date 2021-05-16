const data_syst = require('../../data/structjson/all_systeme.json');
const data_guild = require('../../data/structjson/guild.json');
const data_user = require('../../data/structjson/user.json');
const { fun_index_users } = require('../Fun/fun_index_users');
const data_admin = require('../../data/structjson/admin.json');
const { fun_index_guild } = require('../Fun/fun_index_guild');
const { fun_gestion_stats } = require('../../stats/fun_gestion_stats');
async function fun_kick(message, command) { 

    let All_MEMBERS = message.mentions.users.map(User => User);
    let index_user = -1;
    let tmp_txt = "";
    let roles_member = "";
    let roles_puissant = [];
    let roles_meneur_bras_droit = [];
    if (All_MEMBERS.length > 1) {
        tmp_txt = "**Les membres ";
    } else 
         tmp_txt = "**Le membre ";
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas mentionner plus de 50 members !**"));
    }
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Vous devez mentionner au moin un membre !**"));
    }
    for(let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].rolemeneur.length > 10)
            roles_puissant.push(data_guild._guild[i].rolemeneur);
        if (data_guild._guild[i].brasdroit.length > 10)
            roles_puissant.push(data_guild._guild[i].brasdroit);
        if (data_guild._guild[i].conseiller.length > 10)
            roles_puissant.push(data_guild._guild[i].conseiller);
    }
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    if (data_admin.ADMIN.indexOf(message.member.user.id) == -1) {    
        for (let i = 0; i < All_MEMBERS.length; i++) {
            roles_member = message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id)._roles;
            for (let y = 0; y < roles_puissant.length; y++) {
                if (roles_member.indexOf(roles_puissant[y]) > -1) {
                    return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre avec des droits aussi importants !**"));
                }
            }
            if (roles_member.indexOf(data_user._user[fun_index_users(message.member.id)].rang_guild) == -1) {
                return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre d'une autre guilde !**"));
            }
        }
    } else
        message.channel.send("🤖 **Obéissance absolu activée !**");
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    for (let i = 0; i < All_MEMBERS.length; i++) {
        index_user = fun_index_users(All_MEMBERS[i].id);
        console.log(All_MEMBERS[i].id);
        if (index_user != -1) {
                message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id).kick();
                data_user._user[index_user].rang_power = "";
                data_user._user[index_user].rang_coa = "";
                data_user._user[index_user].rang_guild = "";
                data_user._user[index_user].tuto_statue = false;
                data_user._user[index_user].tuto_boutique_statue = false;
                data_user._user[index_user].tuto_don =  false;
                data_user._user[index_user].tuto_vol = false;
                data_user._user[index_user].tuto_like = false;
                data_user._user[index_user].tuto_profil = false;
                data_user._user[index_user].tuto_rang = "";
                data_user._user[index_user].date_inscription = "";
                    tmp_txt += "<@!"+ data_user._user[index_user].id +"> ";
                    if (All_MEMBERS.length -1 > i) {
                        tmp_txt += " | "; 
                    }
                }
            if (All_MEMBERS.length > 1)
                tmp_txt += "ce sont fait kick**";
            else 
                tmp_txt += "s'est fait kick**";
            message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[Commande admin] fait part <@!"+message.member.id+"> !**");
        }
}


async function fun_bann(message, command) { 

    let All_MEMBERS = message.mentions.users.map(User => User);
    let index_user = -1;
    let tmp_txt = "";
    let roles_member = "";
    let roles_puissant = [];
    let roles_meneur_bras_droit = [];
    if (All_MEMBERS.length > 1) {
        tmp_txt = "**Les membres ";
    } else 
         tmp_txt = "**Le membre ";
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas mentionner plus de 50 members !**"));
    }
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Vous devez mentionner au moin un membre !**"));
    }
    for(let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].rolemeneur.length > 10)
            roles_puissant.push(data_guild._guild[i].rolemeneur);
        if (data_guild._guild[i].brasdroit.length > 10)
            roles_puissant.push(data_guild._guild[i].brasdroit);
        if (data_guild._guild[i].conseiller.length > 10)
            roles_puissant.push(data_guild._guild[i].conseiller);
    }
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    if (data_admin.ADMIN.indexOf(message.member.user.id) == -1) {    
        for (let i = 0; i < All_MEMBERS.length; i++) {
            roles_member = message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id)._roles;
            for (let y = 0; y < roles_puissant.length; y++) {
                if (roles_member.indexOf(roles_puissant[y]) > -1) {
                    return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre avec des droits aussi importants !**"));
                }
            }
            if (roles_member.indexOf(data_user._user[fun_index_users(message.member.id)].rang_guild) == -1) {
                return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre d'une autre guilde !**"));
            }
        }
    } else
        message.channel.send("🤖 **Obéissance absolu activée !**");
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    for (let i = 0; i < All_MEMBERS.length; i++) {
        index_user = fun_index_users(All_MEMBERS[i].id);
        console.log(All_MEMBERS[i].id);
        if (index_user != -1) {
                message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id).ban();
                data_user._user[index_user].rang_power = "";
                data_user._user[index_user].rang_coa = "";
                data_user._user[index_user].rang_guild = "";
                data_user._user[index_user].tuto_statue = false;
                data_user._user[index_user].tuto_boutique_statue = false;
                data_user._user[index_user].tuto_don =  false;
                data_user._user[index_user].tuto_vol = false;
                data_user._user[index_user].tuto_like = false;
                data_user._user[index_user].tuto_profil = false;
                data_user._user[index_user].tuto_rang = "";
                data_user._user[index_user].date_inscription = "";
                    tmp_txt += "<@!"+ data_user._user[index_user].id +"> ";
                    if (All_MEMBERS.length -1 > i) {
                        tmp_txt += " | "; 
                    }
                }
            if (All_MEMBERS.length > 1)
                tmp_txt += "ce sont fait ban**";
            else 
                tmp_txt += "s'est fait ban**";
            message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[Commande admin] fait part <@!"+message.member.id+"> !**");
        }
}
async function fun_add_bras_droit(message, command) { 

    let All_MEMBERS = message.mentions.users.map(User => User);
    let index_user = -1;
    let index_guild = -1;
    let tmp_txt = "";
    let roles_member = [];
    let roles_puissant = [];
         tmp_txt = "**Le membre ";
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Vous devez mentionner au moin un membre !**"));
    }
    for(let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].rolemeneur.length > 10)
            roles_puissant.push(data_guild._guild[i].rolemeneur);
        if (data_guild._guild[i].brasdroit.length > 10)
            roles_puissant.push(data_guild._guild[i].brasdroit);
        if (data_guild._guild[i].conseiller.length > 10)
            roles_puissant.push(data_guild._guild[i].conseiller);
    }
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    if (data_admin.ADMIN.indexOf(message.member.user.id) == -1) {    
        for (let i = 0; i < All_MEMBERS.length; i++) {
            roles_member = message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id)._roles;
            if (roles_member.indexOf(data_user._user[fun_index_users(message.member.id)].rang_guild) == -1) {
                return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre d'une autre guilde !**"));
            }
        }
    } else
        message.channel.send("🤖 **Obéissance absolu activée !**");
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    index_user = fun_index_users(message.mentions.users.first().id);
    index_guild = await fun_index_guild("", data_user._user[index_user].rang_guild);
    console.log("index_user = "+ index_user);
    console.log("index_guild = "+ index_guild);
    let channel_guild = message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_discussion_id);
    let channel_etoile = message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id);

    if (await roles_member.indexOf(data_guild._guild[index_guild].conseiller) > -1) {
        channel_guild.send("**Le membre <@!"+ data_user._user[index_user].id +"> a monter de grade et obtient le rang Bras droit ! :thumbsup:**");
        channel_etoile.send("**Le membre <@!"+ data_user._user[index_user].id +"> a monter de grade et obtient le rang Bras droit ! :thumbsup:**");
        message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.remove(data_guild._guild[index_guild].conseiller);
        message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.add(data_guild._guild[index_guild].brasdroit);
        return;
    }
    channel_guild.send("**Le membre <@!"+ data_user._user[index_user].id +"> obtient le rang Bras droit, bienvenue dans le Staff :thumbsup: !**");
    channel_etoile.send("**Le membre <@!"+ data_user._user[index_user].id +"> obtient le rang Bras droit, bienvenue dans le Staff :thumbsup: !**");
    message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.add(data_syst.STAFF_ID);
    message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.add(data_guild._guild[index_guild].brasdroit);
    return;
    // data_guild._guild[index_guild].rolemeneur
    // data_guild._guild[index_guild].brasdroit
    // data_guild._guild[index_guild].conseiller
}
async function fun_add_conseiller(message, command) { 

    let All_MEMBERS = message.mentions.users.map(User => User);
    let index_user = -1;
    let index_guild = -1;
    let tmp_txt = "";
    let roles_member = "";
    let roles_puissant = [];
         tmp_txt = "**Le membre ";
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Vous devez mentionner au moin un membre !**"));
    }
    for(let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].rolemeneur.length > 10)
            roles_puissant.push(data_guild._guild[i].rolemeneur);
        if (data_guild._guild[i].brasdroit.length > 10)
            roles_puissant.push(data_guild._guild[i].brasdroit);
        if (data_guild._guild[i].conseiller.length > 10)
            roles_puissant.push(data_guild._guild[i].conseiller);
    }
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    if (data_admin.ADMIN.indexOf(message.member.user.id) == -1) {    
        for (let i = 0; i < All_MEMBERS.length; i++) {
            roles_member = message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id)._roles;
            if (roles_member.indexOf(data_user._user[fun_index_users(message.member.id)].rang_guild) == -1) {
                return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre d'une autre guilde !**"));
            }
        }
    } else
        message.channel.send("🤖 **Obéissance absolu activée !**");
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    index_user = fun_index_users(message.mentions.users.first().id);
    index_guild = await fun_index_guild("", data_user._user[index_user].rang_guild);
    console.log("index_user = "+ index_user);
    console.log("index_guild = "+ index_guild);
    let channel_guild = message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_discussion_id);
    let channel_etoile = message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id);
    if (roles_member.indexOf(data_guild._guild[index_guild].brasdroit) > -1) {
        channel_guild.send("**Le membre <@!"+ data_user._user[index_user].id +"> obtient le rang conseiller ! :thumbsup:**");
        channel_etoile.send("**Le membre <@!"+ data_user._user[index_user].id +"> obtient le rang conseiller ! :thumbsup:**");
        message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.remove(data_guild._guild[index_guild].brasdroit);
        message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.add(data_guild._guild[index_guild].conseiller);
        return;
    }
    channel_guild.send("**Le membre <@!"+ data_user._user[index_user].id +"> obtient le rang conseiller, bienvenue dans le Staff :thumbsup: !**");
    channel_etoile.send("**Le membre <@!"+ data_user._user[index_user].id +"> obtient le rang conseiller, bienvenue dans le Staff :thumbsup: !**");
    message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.add(data_syst.STAFF_ID);
    message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.add(data_guild._guild[index_guild].conseiller);
    return;
    // data_guild._guild[index_guild].rolemeneur
    // data_guild._guild[index_guild].brasdroit
    // data_guild._guild[index_guild].conseiller
}
async function fun_delete_conseiller(message, command) { 

    let All_MEMBERS = message.mentions.users.map(User => User);
    let index_user = -1;
    let index_guild = -1;
    let tmp_txt = "";
    let roles_member = "";
    let roles_puissant = [];
         tmp_txt = "**Le membre ";
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Vous devez mentionner au moin un membre !**"));
    }
    for(let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].rolemeneur.length > 10)
            roles_puissant.push(data_guild._guild[i].rolemeneur);
        if (data_guild._guild[i].brasdroit.length > 10)
            roles_puissant.push(data_guild._guild[i].brasdroit);
        if (data_guild._guild[i].conseiller.length > 10)
            roles_puissant.push(data_guild._guild[i].conseiller);
    }
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    if (data_admin.ADMIN.indexOf(message.member.user.id) == -1) {    
        for (let i = 0; i < All_MEMBERS.length; i++) {
            roles_member = message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id)._roles;
            if (roles_member.indexOf(data_user._user[fun_index_users(message.member.id)].rang_guild) == -1) {
                return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre d'une autre guilde !**"));
            }
        }
    } else
        message.channel.send("🤖 **Obéissance absolu activée !**");
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    index_user = fun_index_users(message.mentions.users.first().id);
    index_guild = await fun_index_guild("", data_user._user[index_user].rang_guild);
    console.log("index_user = "+ index_user);
    console.log("index_guild = "+ index_guild);
    let channel_guild = message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_discussion_id);
    let channel_etoile = message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id);

    channel_guild.send("**Le membre <@!"+ data_user._user[index_user].id +"> a perdu le rang Conseiller !**");
    channel_etoile.send("**Le membre <@!"+ data_user._user[index_user].id +"> a perdu le rang Conseiller !**");
    message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.remove(data_syst.STAFF_ID);
    message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.remove(data_guild._guild[index_guild].conseiller);
    return;
    // data_guild._guild[index_guild].rolemeneur
    // data_guild._guild[index_guild].brasdroit
    // data_guild._guild[index_guild].conseiller
}
async function fun_delete_brasdroit(message, command) { 

    let All_MEMBERS = message.mentions.users.map(User => User);
    let index_user = -1;
    let index_guild = -1;
    let tmp_txt = "";
    let roles_member = "";
    let roles_puissant = [];
    
         tmp_txt = "**Le membre ";
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Vous devez mentionner au moin un membre !**"));
    }
    for(let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].rolemeneur.length > 10)
            roles_puissant.push(data_guild._guild[i].rolemeneur);
        if (data_guild._guild[i].brasdroit.length > 10)
            roles_puissant.push(data_guild._guild[i].brasdroit);
        if (data_guild._guild[i].conseiller.length > 10)
            roles_puissant.push(data_guild._guild[i].conseiller);
    }
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    if (data_admin.ADMIN.indexOf(message.member.user.id) == -1) {    
        for (let i = 0; i < All_MEMBERS.length; i++) {
            roles_member = message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id)._roles;
            if (roles_member.indexOf(data_user._user[fun_index_users(message.member.id)].rang_guild) == -1) {
                return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre d'une autre guilde !**"));
            }
        }
    } else
        message.channel.send("🤖 **Obéissance absolu activée !**");
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    index_user = fun_index_users(message.mentions.users.first().id);
    index_guild = await fun_index_guild("", data_user._user[index_user].rang_guild);
    console.log("index_user = "+ index_user);
    console.log("index_guild = "+ index_guild);
    let channel_guild = message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_discussion_id);
    let channel_etoile = message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id);

    channel_guild.send("**Le membre <@!"+ data_user._user[index_user].id +"> a perdu le rang Bras droit !**");
    channel_etoile.send("**Le membre <@!"+ data_user._user[index_user].id +"> a perdu le rang Bras droit !**");
    message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.remove(data_syst.STAFF_ID);
    message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.remove(data_guild._guild[index_guild].brasdroit);
    return;
    // data_guild._guild[index_guild].rolemeneur
    // data_guild._guild[index_guild].brasdroit
    // data_guild._guild[index_guild].conseiller
}
async function fun_lock_cmd(message, command) {
    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let roles_member = "";
    let roles_puissant = [];
         tmp_txt = "**Le membre ";
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Vous devez mentionner au moin un membre !**"));
    }
    for(let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].rolemeneur.length > 10)
            roles_puissant.push(data_guild._guild[i].rolemeneur);
        if (data_guild._guild[i].brasdroit.length > 10)
            roles_puissant.push(data_guild._guild[i].brasdroit);
        if (data_guild._guild[i].conseiller.length > 10)
            roles_puissant.push(data_guild._guild[i].conseiller);
    }
    if (command.length > 3) {
        return(message.channel.send("🤖 **Il manque un argument !**"))
    }
    if (data_admin.ADMIN.indexOf(message.member.user.id) == -1) {    
        for (let i = 0; i < All_MEMBERS.length; i++) {
            roles_member = message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id)._roles;
            for (let y = 0; y < roles_puissant.length; y++) {
                if (roles_member.indexOf(roles_puissant[y]) > -1) {
                    return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre avec des droits aussi importants !**"));
                }
            }
            if (roles_member.indexOf(data_user._user[fun_index_users(message.member.id)].rang_guild) == -1) {
                return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre d'une autre guilde !**"));
            }
        }
    } else
        message.channel.send("🤖 **Obéissance absolu activée !**");
    if (command[2].toUpperCase() == "FALSE") {
        data_user._user[fun_index_users(message.mentions.users.first().id)].lock = true;
        return(message.channel.send("🤖 **Le membre <@"+message.mentions.users.first().id+"> ne peux plus faire de commande !**"));
    }
    else if (command[2].toUpperCase() == "TRUE") {
        data_user._user[fun_index_users(message.mentions.users.first().id)].lock = false;
        return(message.channel.send("🤖 **Le membre <@"+message.mentions.users.first().id+"> peux utiliser des commande !**"));
    } else {
        return(message.channel.send("🤖 **Le deuxième argument doit-être soit FALSE ou TRUE !**"));
    }
}

async function fun_add_rang_option (message, command) { 
    let All_MEMBERS = message.mentions.users.map(User => User);
    let index_user = -1;
    let tmp_txt = "";
    let roles_member = "";
    let roles_puissant = [];
    for(let i = 0; i < data_guild._guild.length; i++) {
        roles_puissant.push(data_guild._guild[i].rolemeneur);
        roles_puissant.push(data_guild._guild[i].brasdroit);
        roles_puissant.push(data_guild._guild[i].conseiller);
    }
    if (All_MEMBERS.length > 1) {
        tmp_txt = "**Les membres ";
    } else 
         tmp_txt = "**Le membre ";
    if (All_MEMBERS.length > 10) {
        return(message.channel.send("🤖 **Vous ne pouvez pas mentionner plus de 10 members !**"));
    }
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Vous devez mentionner au moin un membre !**"));
    }
    if (!message.mentions.roles.first()) {
        return(message.channel.send("🤖 **Vous devez mentionner un rôle !**"));
    }
    let roles_add = message.mentions.roles.first();
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    for (let i = 0; i < All_MEMBERS.length; i++) {
        roles_member = message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id)._roles;
        for (let y = 0; y < roles_puissant.length; y++) {
            if (roles_member.indexOf(roles_puissant[y]) > -1) {
                return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre avec des droits aussi importants !**"));
            }
        }
        if (roles_member.indexOf(data_user._user[fun_index_users(message.member.id)].rang_guild) == -1) {
            return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre d'une autre guilde !**"));
        }
    }

    if (roles_add.id == data_syst.roles_tuto_1_id ||
roles_add.id == data_syst.roles_tuto_2_id ||
roles_add.id == data_syst.roles_tuto_3_id ||
roles_add.id == data_syst.roles_tuto_4_id ||
roles_add.id == data_syst.roles_tuto_5_id ||
roles_add.id == data_syst.roles_tuto_6_id ||
roles_add.id == data_syst.roles_tuto_7_id ||
roles_add.id == data_syst.roles_tuto_8_i ||
roles_add.id == data_syst.roles_tuto_9_id ||
roles_add.id == data_syst.roles_tuto_10_id ||
roles_add.id == data_syst.roles_tuto_11_id ||
roles_add.id == data_syst.roles_tuto_12_id ||
roles_add.id == data_syst.roles_tuto_13_id ||
roles_add.id == data_syst.roles_tuto_14_id ||
roles_add.id == data_syst.roles_tuto_15_id ||
roles_add.id == data_syst.roles_tuto_16_id ||
roles_add.id == data_syst.roles_tuto_17_id ||
roles_add.id == data_syst.roles_tuto_18_id ||
roles_add.id == data_syst.Likeur_bronze_id ||
roles_add.id == data_syst.Likeur_argent_id ||
roles_add.id == data_syst.Likeur_or_id ||
roles_add.id == data_syst.Likeur_Platine_id ||
roles_add.id == data_syst.Recruteur_bronze_id ||
roles_add.id == data_syst.Recruteur_argent_id ||
roles_add.id == data_syst.Recruteur_Or_id ||
roles_add.id == data_syst.Recruteur_Platine_id ||
roles_add.id == data_syst.Espion_bronze_id ||
roles_add.id == data_syst.Espion_argent_id ||
roles_add.id == data_syst.Espion_Or_id ||
roles_add.id == data_syst.Espion_Platine_id ||
roles_add.id == data_syst.Muse_bronze_id ||
roles_add.id == data_syst.Muse_argent_id ||
roles_add.id == data_syst.Muse_Or_id ||
roles_add.id == data_syst.Muse_Platine_id ||
roles_add.id == data_syst.Attaquant_bronze_id ||
roles_add.id == data_syst.Attaquant_argent_id ||
roles_add.id == data_syst.Attaquant_Or_id ||
roles_add.id == data_syst.Attaquant_Platine_id ||
roles_add.id == data_syst.Defenseur_bronze_id ||
roles_add.id == data_syst.Defenseur_argent_id ||
roles_add.id == data_syst.Defenseur_Or_id ||
roles_add.id == data_syst.Defenseur_Platine_id ||
roles_add.id == data_syst.Braconnier_bronze_id ||
roles_add.id == data_syst.Braconnier_argent_id ||
roles_add.id == data_syst.Braconnier_Or_id ||
roles_add.id == data_syst.Braconnier_Platine_id ||
roles_add.id == data_syst.Chercheur_de_Trésor_bronze_id ||
roles_add.id == data_syst.Chercheur_de_Trésor_argent_id ||
roles_add.id == data_syst.Chercheur_de_Trésor_Or_id ||
roles_add.id == data_syst.Chercheur_de_Trésor_Platine_id ||
roles_add.id == data_syst.Voleur_bronze_id ||
roles_add.id == data_syst.Voleur_argent_id ||
roles_add.id == data_syst.Voleur_Or_id ||
roles_add.id == data_syst.Voleur_Platine_id ||
roles_add.id == data_syst.Donateur_bronze_id ||
roles_add.id == data_syst.Donateur_argent_id ||
roles_add.id == data_syst.Donateur_Or_id ||
roles_add.id == data_syst.Donateur_Platine_id ||
roles_add.id == data_syst.RANG_COALITION_ID ||
roles_add.id == data_syst.RANG_NOMADE_ID ||
roles_add.id == data_syst.RANG_CHERCHEUR_DE_TRESOR_ID ||
roles_add.id == data_syst.RANG_RECRUTEUR_ID ||
roles_add.id == data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID ||
roles_add.id == data_syst.RANG_BRACONNIER_ID ||
roles_add.id == data_syst.RANG_PENITENT_ID ||
roles_add.id == data_syst.RANG_ESPION_ID ||
roles_add.id == data_syst.RANG_INITIE_ID ||
roles_add.id == data_syst.RANG_MUSE_ID ||
roles_add.id == data_syst.STAFF_ID) {
    return(message.channel.send("🤖 Vous ne pouvez pas mettre manuellement ce genre de rôles !"));
}

    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    for (let i = 0; i < All_MEMBERS.length; i++) {
        index_user = fun_index_users(All_MEMBERS[i].id);
        console.log(All_MEMBERS[i].id);
        if (index_user != -1) {
                message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id).roles.add(roles_add.id);
                if (index_user != -1) {
                    tmp_txt += "<@!"+ data_user._user[index_user].id +"> ";
                    if (All_MEMBERS.length -1 > i) {
                        tmp_txt += " | "; 
                    }
                }
        }
    }
    if (All_MEMBERS.length > 1)
        tmp_txt += "ont reçu le rang "+ roles_add.name +"**";
    else 
        tmp_txt += "a reçu le rang "+ roles_add.name +"**";
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[Commande admin] fait part <@!"+message.member.id+"> !**");
}

async function fun_delete_rang_option (message, command) { 
    let All_MEMBERS = message.mentions.users.map(User => User);
    let index_user = -1;
    let tmp_txt = "";
    let roles_member = "";
    let roles_puissant = [];
    for(let i = 0; i < data_guild._guild.length; i++) {
        roles_puissant.push(data_guild._guild[i].rolemeneur);
        roles_puissant.push(data_guild._guild[i].brasdroit);
        roles_puissant.push(data_guild._guild[i].conseiller);
    }
    if (All_MEMBERS.length > 1) {
        tmp_txt = "**Les membres ";
    } else 
         tmp_txt = "**Le membre ";
    if (All_MEMBERS.length > 10) {
        return(message.channel.send("🤖 **Vous ne pouvez pas mentionner plus de 10 members !**"));
    }
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Vous devez mentionner au moin un membre !**"));
    }
    if (!message.mentions.roles.first()) {
        return(message.channel.send("🤖 **Vous devez mentionner un rôle !**"));
    }
    let roles_add = message.mentions.roles.first();
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    for (let i = 0; i < All_MEMBERS.length; i++) {
        roles_member = message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id)._roles;
        for (let y = 0; y < roles_puissant.length; y++) {
            if (roles_member.indexOf(roles_puissant[y]) > -1) {
                return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre avec des droits aussi importants !**"));
            }
        }
        if (roles_member.indexOf(data_user._user[fun_index_users(message.member.id)].rang_guild) == -1) {
            return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre d'une autre guilde !**"));
        }
    }

    if (roles_add.id == data_syst.roles_tuto_1_id ||
roles_add.id == data_syst.roles_tuto_2_id ||
roles_add.id == data_syst.roles_tuto_3_id ||
roles_add.id == data_syst.roles_tuto_4_id ||
roles_add.id == data_syst.roles_tuto_5_id ||
roles_add.id == data_syst.roles_tuto_6_id ||
roles_add.id == data_syst.roles_tuto_7_id ||
roles_add.id == data_syst.roles_tuto_8_i ||
roles_add.id == data_syst.roles_tuto_9_id ||
roles_add.id == data_syst.roles_tuto_10_id ||
roles_add.id == data_syst.roles_tuto_11_id ||
roles_add.id == data_syst.roles_tuto_12_id ||
roles_add.id == data_syst.roles_tuto_13_id ||
roles_add.id == data_syst.roles_tuto_14_id ||
roles_add.id == data_syst.roles_tuto_15_id ||
roles_add.id == data_syst.roles_tuto_16_id ||
roles_add.id == data_syst.roles_tuto_17_id ||
roles_add.id == data_syst.roles_tuto_18_id ||
roles_add.id == data_syst.Likeur_bronze_id ||
roles_add.id == data_syst.Likeur_argent_id ||
roles_add.id == data_syst.Likeur_or_id ||
roles_add.id == data_syst.Likeur_Platine_id ||
roles_add.id == data_syst.Recruteur_bronze_id ||
roles_add.id == data_syst.Recruteur_argent_id ||
roles_add.id == data_syst.Recruteur_Or_id ||
roles_add.id == data_syst.Recruteur_Platine_id ||
roles_add.id == data_syst.Espion_bronze_id ||
roles_add.id == data_syst.Espion_argent_id ||
roles_add.id == data_syst.Espion_Or_id ||
roles_add.id == data_syst.Espion_Platine_id ||
roles_add.id == data_syst.Muse_bronze_id ||
roles_add.id == data_syst.Muse_argent_id ||
roles_add.id == data_syst.Muse_Or_id ||
roles_add.id == data_syst.Muse_Platine_id ||
roles_add.id == data_syst.Attaquant_bronze_id ||
roles_add.id == data_syst.Attaquant_argent_id ||
roles_add.id == data_syst.Attaquant_Or_id ||
roles_add.id == data_syst.Attaquant_Platine_id ||
roles_add.id == data_syst.Defenseur_bronze_id ||
roles_add.id == data_syst.Defenseur_argent_id ||
roles_add.id == data_syst.Defenseur_Or_id ||
roles_add.id == data_syst.Defenseur_Platine_id ||
roles_add.id == data_syst.Braconnier_bronze_id ||
roles_add.id == data_syst.Braconnier_argent_id ||
roles_add.id == data_syst.Braconnier_Or_id ||
roles_add.id == data_syst.Braconnier_Platine_id ||
roles_add.id == data_syst.Chercheur_de_Trésor_bronze_id ||
roles_add.id == data_syst.Chercheur_de_Trésor_argent_id ||
roles_add.id == data_syst.Chercheur_de_Trésor_Or_id ||
roles_add.id == data_syst.Chercheur_de_Trésor_Platine_id ||
roles_add.id == data_syst.Voleur_bronze_id ||
roles_add.id == data_syst.Voleur_argent_id ||
roles_add.id == data_syst.Voleur_Or_id ||
roles_add.id == data_syst.Voleur_Platine_id ||
roles_add.id == data_syst.Donateur_bronze_id ||
roles_add.id == data_syst.Donateur_argent_id ||
roles_add.id == data_syst.Donateur_Or_id ||
roles_add.id == data_syst.Donateur_Platine_id ||
roles_add.id == data_syst.RANG_COALITION_ID ||
roles_add.id == data_syst.RANG_NOMADE_ID ||
roles_add.id == data_syst.RANG_CHERCHEUR_DE_TRESOR_ID ||
roles_add.id == data_syst.RANG_RECRUTEUR_ID ||
roles_add.id == data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID ||
roles_add.id == data_syst.RANG_BRACONNIER_ID ||
roles_add.id == data_syst.RANG_PENITENT_ID ||
roles_add.id == data_syst.RANG_ESPION_ID ||
roles_add.id == data_syst.RANG_INITIE_ID ||
roles_add.id == data_syst.RANG_MUSE_ID ||
roles_add.id == data_syst.STAFF_ID) {
    return(message.channel.send("🤖 Vous ne pouvez pas mettre manuellement ce genre de rôles !"));
}

    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    for (let i = 0; i < All_MEMBERS.length; i++) {
        index_user = fun_index_users(All_MEMBERS[i].id);
        console.log(All_MEMBERS[i].id);
        if (index_user != -1) {
                message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id).roles.remove(roles_add.id);
                if (index_user != -1) {
                    tmp_txt += "<@!"+ data_user._user[index_user].id +"> ";
                    if (All_MEMBERS.length -1 > i) {
                        tmp_txt += " | "; 
                    }
                }
        }
    }
    if (All_MEMBERS.length > 1)
        tmp_txt += "ont perdu le rang "+ roles_add.name +"**";
    else 
        tmp_txt += "a perdu le rang "+ roles_add.name +"**";
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[Commande admin] fait part <@!"+message.member.id+"> !**");
}

async function fun_add_coffre(message, command) {
    if (command.length > 2) 
        return(message.channel.send("🤖  Vous avez mis trop d'arguments !**"));
    if(!Math.round(parseInt(command[1], 10)))
        return(message.channel.send("🤖  Votre deuxième argument doit-être un NBR !**"));
    let index_user = fun_index_users(message.member.id);
    if (index_user == -1)  
        return(message.channel.send("🤖  C'est problématique... Vous n'êtes pas enregistré dans la [DATA] !**"));
    let index_guild = await fun_index_guild("", data_user._user[index_user].rang_guild);
    if (index_guild == -1)  
        return(message.channel.send("🤖  C'est problématique... Votre guilde n'est pas enregistré dans la [DATA] !**"));
    if (Math.round(parseInt(command[1], 10)) > 5000000000)
        return(message.channel.send("🤖  Vous ne pouvez pas mettre plus de 500.000.0000 de kamas en une seul fois dans un coffre !**"));
    data_guild._guild[index_guild].coffre_guild += Math.round(parseInt(command[1], 10));
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("** "+Math.round(parseInt(command[1], 10))+" kamas ont été rajouté dans le coffre de la guilde <@&"+ data_user._user[index_guild].rang_guild +"> **");
    message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_discussion_id).send("** "+Math.round(parseInt(command[1], 10))+" kamas ont été rajouté dans le coffre de la guilde <@&"+ data_user._user[index_guild].rang_guild +"> **");
    fun_gestion_stats();
}
async function fun_delete_coffre(message, command) {
    if (command.length > 2) 
        return(message.channel.send("🤖  Vous avez mis trop d'arguments !**"));
    if(!Math.round(parseInt(command[1], 10)))
        return(message.channel.send("🤖  Votre deuxième argument doit-être un NBR !**"));
    let index_user = fun_index_users(message.member.id);
    if (index_user == -1)  
        return(message.channel.send("🤖  C'est problématique... Vous n'êtes pas enregistré dans la [DATA] !**"));
    let index_guild = await fun_index_guild("", data_user._user[index_user].rang_guild);
    if (index_guild == -1)  
        return(message.channel.send("🤖  C'est problématique... Votre guilde n'est pas enregistré dans la [DATA] !**"));
    if (Math.round(parseInt(command[1], 10)) > 5000000000)
        return(message.channel.send("🤖  Vous ne pouvez pas mettre plus de 500.000.0000 de kamas en une seul fois dans un coffre !**"));
    data_guild._guild[index_guild].coffre_guild -= Math.round(parseInt(command[1], 10));
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("** "+Math.round(parseInt(command[1], 10))+" kamas ont été rajouté dans le coffre de la guilde <@&"+ data_user._user[index_guild].rang_guild +"> **");
    message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_discussion_id).send("** "+Math.round(parseInt(command[1], 10))+" kamas ont été rajouté dans le coffre de la guilde <@&"+ data_user._user[index_guild].rang_guild +"> **");
    fun_gestion_stats();
}
async function fun_payement(message, command) {
    let All_MEMBERS = message.mentions.users.map(User => User);
    let index_user = -1;
    let index_guild = -1;
    let tmp_txt = "";
    let roles_member = "";
    let nbr_payement = 0;
    for (let i = 0; i < All_MEMBERS.length; i++) {
        roles_member = message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id)._roles;
        if (roles_member.indexOf(data_user._user[fun_index_users(message.member.id)].rang_guild) == -1) {
            return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre d'une autre guilde !**"));
        }
    }
    index_guild = await fun_index_guild("", data_user._user[fun_index_users(message.member.id)].rang_guild);
    tmp_txt = "**";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        index_user = fun_index_users(All_MEMBERS[i].id);
        if (index_user != -1) {
            if (data_user._user[index_user].kamas_waiting > 0) {
                nbr_payement += 1;
                tmp_txt += "<@!"+ data_user._user[index_user].id +"> [+ "+ data_user._user[index_user].kamas_waiting +" kamas ] ";
                data_user._user[index_user].kamas_waiting = 0;
                data_guild._guild[index_guild].recompenses += data_user._user[index_user].kamas_waiting;
                if (All_MEMBERS.length -1 > i) {
                    tmp_txt += " | "; 
                }
            }            
        }
    }
    if (nbr_payement == 0) {
        return (message.channel.send("🤖  **Pas de récompense parmis le ou les membres cités !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt += "ont reçu leurs récompenses !**";
    else 
        tmp_txt += "a reçu sa récompense !**";
    fun_gestion_stats();
    await message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[Commande admin] fait part <@!"+message.member.id+"> !**");    
    await message.guild.channels.cache.find(elem => elem.id == data_syst.Recompenses_id).send(tmp_txt + "\n**[Commande admin] fait part <@!"+message.member.id+"> !**");
} 
exports.fun_kick = fun_kick;
exports.fun_bann = fun_bann;
exports.fun_add_bras_droit = fun_add_bras_droit;
exports.fun_add_conseiller = fun_add_conseiller;
exports.fun_delete_brasdroit = fun_delete_brasdroit;
exports.fun_delete_conseiller = fun_delete_conseiller;
exports.fun_lock_cmd = fun_lock_cmd;
exports.fun_add_rang_option = fun_add_rang_option;
exports.fun_delete_rang_option = fun_delete_rang_option;
exports.fun_add_coffre = fun_add_coffre;
exports.fun_delete_coffre = fun_delete_coffre;
exports.fun_payement = fun_payement;
