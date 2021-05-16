const fs = require('fs');
const data_tuto = require('../structjson/tutoriel.json');

function fun_check_data(data)
{
    if (data == 'undefined')
        return (undefined);
    if (data == 'NaN')
        return (NaN);
    if (data == 'false')
        return (false);
    if (data == 'true')
        return (true);
    if (parseInt(data, 10) < 100000000000 && parseInt(data, 10) != NaN)
        return (parseInt(data,10));
    return(data);
}

async function fun_register_tuto()
{
    let path = __dirname + '/../Save/tuto/';    
    
    if (fs.existsSync(path + "tuto_statue.txt")) 
        data_tuto.tuto_statue = fun_check_data(fs.readFileSync(path + "tuto_statue.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
    if (fs.existsSync(path + "id_msg_welcome.txt")) 
        data_tuto.id_msg_welcome = fun_check_data(fs.readFileSync(path + "id_msg_welcome.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
    if (fs.existsSync(path + "id_guild.txt")) 
        data_tuto.id_guild = fun_check_data(fs.readFileSync(path + "id_guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString()).split(/,+/g);;
    if (fs.existsSync(path + "name_guild.txt")) 
        data_tuto.name_guild = fun_check_data(fs.readFileSync(path + "name_guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString()).split(/,+/g);;   
}
exports.fun_register_tuto = fun_register_tuto;  