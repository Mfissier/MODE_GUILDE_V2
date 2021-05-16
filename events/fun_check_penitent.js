const Discord = require('discord.js');
const client = new Discord.Client();
const index = require('../index');
const data_syst = require('../data/structjson/all_systeme.json');
const data_user = require('../data/structjson/user.json');
const data_absent = require('../data/structjson/absent.json');
const { fun_index_guild } = require('../commands/Fun/fun_index_guild');
const data_guild = require('../data/structjson/guild.json');
async function fun_check_penitent(client) {
    let check_date_hours;
    let check_date_day;
    let check_date_month;

    let today = new Date();
    let today_hours = today.getHours();
    let today_day = today.getDay(); 
    let today_month = today.getMonth();
    let new_object;
    let new_msg;
    let index_guild;
    let new_member_roles = [];
    setTimeout(fun_check_penitent, 60000*60, client);
    for (let i = 0; i < data_user._user.length; i++) {
        if (data_user._user[i].date_inscription instanceof Date) {
            check_date = data_user._user[i].date_inscription;
            check_date_hours = check_date.getHours();
            check_date_day = check_date.getDay();
            check_date_month = check_date.getMonth();
            if (today_hours == check_date_hours && today_day == check_date_day && today_month == check_date_month) {
                // client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id)._roles);
                // client.guilds.cache.map (elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.RANG_COALITION_ID));
                new_object = Object.assign({},data_absent._absent[0]);
                data_absent._absent.push(new_object);
                data_absent._absent[data_absent._absent.length - 1].id_inscris = data_user._user[i].id;
                index_guild = await fun_index_guild("", data_user._user[i].rang_guild);
                new_member_roles = await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id));
                if (new_member_roles[0]) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id)._roles)
                    if (new_member_roles.indexOf(elem => elem == data_syst.STAFF_ID) == -1) {
                        if (!new_member_roles.indexOf(elem => elem == data_syst.PENITENT_ID)) {
                            if (index_guild > -1) {
                                new_msg = await client.channels.cache.find(elem=>elem.id == data_guild._guild[index_guild].channel_staff_mission_id).send("\
**Voulez-vous mettre <@"+ data_user._user[i].id +"> Penitent ?!**\n\
✅ [Valider]\n\
❌ [Refuser]");
                                await new_msg.react('✅');
                                await new_msg.react('❌');
                                data_absent._absent[data_absent._absent.length - 1].id_message = await new_msg.id;
                                data_user._user[i].date_inscription = "";
                            } 
                        }
                    } else {
                        //Clean et kik la personne !
                    }
                }
            }
        }
    } 
    //console.log();
} 
exports.fun_check_penitent = fun_check_penitent;
//date_inscription