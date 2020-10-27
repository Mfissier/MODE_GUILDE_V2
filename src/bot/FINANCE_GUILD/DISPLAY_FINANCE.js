const NBR_STARS_ALL_GUILD = require('./NBR_STARS_ALL_GUILD');

data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');

async function DISPLAY_FINANCE(message)
{
    let channel_n;
    let valeur_stars;
    for (let i = 0; i < data_guilde.channel_finances.length; i++)
    {
        if (data_guilde.channel_finances[i])
        {
            channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_finances[i]);
            await NBR_STARS_ALL_GUILD.NBR_STARS_ALL_GUILD();
            valeur_stars = parseInt(data_guilde.coffre_guild[i], 10) / parseInt(data_guilde.nbr_total_star[i], 10);
            console.log('data_guilde.nbr_total_star[i' + data_guilde.nbr_total_star[i]);
            console.log('valeur stars = ' + valeur_stars);
            if (valeur_stars > 10000)
                valeur_stars = 10000;
            if (valeur_stars < 5000)
                valeur_stars = 5000;
            valeur_stars = Math.trunc(valeur_stars);
            if (data_guilde.star_to_kamas[i] == undefined)
                data_guilde.star_to_kamas[i] = 0;
            data_guilde.value_stars[i] = valeur_stars;
            channel_n.send('```Finance de la guilde '+ data_guilde.name_guild[i] +' !```\n\
> ** 🏦 ' + data_guilde.coffre_guild[i] +' kamas total !\n\
> ⭐ '+ data_guilde.nbr_total_star[i] +' totales !\n\
> '+ valeur_stars +' kamas/⭐ \n\
> 💸 '+ data_guilde.star_to_kamas[i] +'** ');
        }
    }
}

exports.DISPLAY_FINANCE = DISPLAY_FINANCE;