const Discord = require('discord.js');
const data_syst = require('../../data/structjson/all_systeme.json');

async function fun_delete_rang_base(message){
    let all_roles = message.member._roles;
    if(all_roles.find(elem => elem == data_syst.RANG_TRESORIER_ID)){
        await message.member.roles.remove(data_syst.RANG_TRESORIER_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_PROTECTEUR_ID)){
        await message.member.roles.remove(data_syst.RANG_PROTECTEUR_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_CHERCHEUR_DE_TRESOR_ID)){
        await message.member.roles.remove(data_syst.RANG_CHERCHEUR_DE_TRESOR_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_SECRETAIRE_ID)){
        await message.member.roles.remove(data_syst.RANG_SECRETAIRE_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_RECRUTEUR_ID)){
        await message.member.roles.remove(data_syst.RANG_RECRUTEUR_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID)){
        await message.member.roles.remove(data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_BRACONNIER_ID)){
        await message.member.roles.remove(data_syst.RANG_BRACONNIER_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_APPRENTIE_ID)){
        await message.member.roles.remove(data_syst.RANG_APPRENTIE_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_PENITENT_ID)){
        await message.member.roles.remove(data_syst.RANG_PENITENT_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_BOULET_ID)){
        await message.member.roles.remove(data_syst.RANG_BOULET_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_RESERVISTE_ID)){
        await message.member.roles.remove(data_syst.RANG_RESERVISTE_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_ESPION_ID)){
        await message.member.roles.remove(data_syst.RANG_ESPION_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_ESSAI_ID)){
        await message.member.roles.remove(data_syst.RANG_ESSAI_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_DESERTEUR_ID)){
        await message.member.roles.remove(data_syst.RANG_DESERTEUR_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_INITIE_ID)){
        await message.member.roles.remove(data_syst.RANG_INITIE_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_ARTISAN_ID)){
        await message.member.roles.remove(data_syst.RANG_ARTISAN_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_MASCOTTE_ID)){
        await message.member.roles.remove(data_syst.RANG_MASCOTTE_ID);
    }
    if(all_roles.find(elem => elem == data_syst.RANG_MUSE_ID)){
        await message.member.roles.remove(data_syst.RANG_MUSE_ID);
    }
}
exports.fun_delete_rang_base = fun_delete_rang_base;