const { DataResolver } = require('discord.js');

data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');

async function NBR_STARS_ALL_GUILD()
{
    let nbr = 0;
    console.log('???');
    for (let i = 0; i < data_guilde.name_guild.length; i++)
    {
        console.log(data_guilde.name_guild[i]);
        for (let j = 1; j < data_user._user.length; j++)
        {
            if (data_user._user[j].rang_guild == data_guilde.guild[i])
            {
                if (data_user._user[j].rang_power != 'PENITENT')
                {
                        // console.log (data_user._user[j].username);
                        // console.log(data_user._user[j].rang_guild);
                        // console.log(data_user._user[j].stars);
                        // console.log(data_guilde.guild[i]);
                        nbr += data_user._user[j].stars;
                        // console.log(nbr);
                        data_guilde.nbr_total_star[j] = nbr;
                        if (data_guilde.nbr_total_star == NaN)
                            data_guilde.nbr_total_star = 0;
                }
            }

            // if (data_user._user[j].rang_guild == data_guilde.guild[i] && data_user._user[j].rang_power != 'PENITENT')
            // {
            //     console.log (data_user._user[j].username);
            //     nbr += data_user._user[j].stars;
            //     break;
            // }
        }
        console.log(nbr);
        data_guilde.nbr_total_star[i] = Object.assign(nbr);
        nbr = 0;
    }
}
exports.NBR_STARS_ALL_GUILD = NBR_STARS_ALL_GUILD;