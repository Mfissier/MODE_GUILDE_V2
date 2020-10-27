data_user = require('../../data/structjson/user.json');
data_guild = require('../../data/structjson/guild.json');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  async function TRANSFERT(message)
{
    let id_channel_send = message.channel.id;
    member_cmd = message.member.user;
    args = message.content.split(/ +/g);
    index_channel_ok = 0;
    let stuff = [
    "[Demi-Baguette]",
    "[La Trancheuse d'Arakne]",
    "[La Plantouze des Champs]", 
    "[Tailladeuse de Manche]",
    "[Chapeau de l'Aventurier Bandeau de Vitalité]",
    "[Chapeau du Piou Rouge]",
    "[Chapeau du Piou Jaune]",
    "[Chapeau du Piou Vert]",
    "[Cape du Piou Violet]",
    "[Cape du Piou Rose]",
    "[La Cape S'loque]",
    "[Cape du Piou Rouge]",
    "[Cape du Piou Vert]",
    "[Cape du Piou Bleu]",
    "[Les Incrustes]",
    "[Sandales du Piou Rose]", 
    "[Sandales du Piou Violet]", 
    "[Sandales du Piou Rouge]", 
    "[Ceinture du Piou Rose]", 
    "[Ceinture du Piou Violet]", 
    "[La Spamette]", 
    "[Ceinture du Piou Bleu]", 
    "[Ceinture du Piou Vert]", 
    "[Amulette du Piou Rose]", 
    "[Amulette de l'Aventurier]", 
    "[Le S'Mesme]", 
    "[Animulette]", 
    "[Amulette du Piou Violet]", 
    "[Amulette du Piou Rose]", 
    "[Amulette du Piou Jaune]",
    "[Le Plussain]", 
    "[Anneau du Piou Rose]", 
    "[Anneau du Piou Violet]", 
    "[Anneau du Piou Bleu]"]; 

    let random = getRandomInt(stuff.length - 1);
    console.log(stuff[random]);
    let random_id = getRandomInt(1000);
    let nbr_stars = 0;
    for (let i = 0; i < data_guild.name_guild.length; i++)
    {
        if (data_guild.channel_transferts[i] == id_channel_send)
        {
            index_channel_ok = 1;
            if (args[1])
            {
                nbr_stars = parseInt(args[1],10)
                if (nbr_stars == NaN)
                    message.channel.send('🤖 **mauvaise argument !**');
                else {
                    for (let y = 0; y < data_user._user.length; y++){
                        if (data_user._user[y].id == member_cmd.id){
                                if (data_user._user[y].stars >= 5 && nbr_stars >= 5){
                                    if (data_user._user[y].kamas_waiting > 0){
                                        message.channel.send('🤖 **Un transfert à la fois !**');
                                        return;
                                    }
                                    let prix_revent = data_guild.value_stars[i] * nbr_stars * 1.02 + random_id;
                                    member_cmd.send('**TON TRANSFERT A BIEN ETE PRIS EN COMPTE UN MEMBRE DU STAFF REVIENDRA VERS TOI DES QUE POSSIBLE** :\n\
> ' + prix_revent + ' kamas te serons alors versé !!! **\n\n\
Il est fortement recommandé de te mettre en mode marchant (**port de Madrestam**) et d\'envoyer ta position dans le canal 『😈』report.\n\
Un membre du Staff viendra acheter ce que tu as mis en vente. (**choisis ce que tu veux**) :thumbsup: ');
                                    let channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_gestion[i]);
                                    if (channel_n)
                                    {
                                        channel_n.send('**<@&'+ data_guild.rolemeneur[i] +'> !!\n\
Le membre <@!' + member_cmd.id + '> à demandé sa récompense !\n\
Mise en attente de sa récompense : \n\
>  à ' + prix_revent + ' kamas ! **');
                                    }
                                    message.channel.send('Le membre <@!' + member_cmd.id + '> à demander un transfert de ' + nbr_stars + ' ⭐');
                                    channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_all_rewards[i]);
                                    if (channel_n)
                                    {
                                        channel_n.send('Le membre <@!' + member_cmd.id + '> à perdu ' + nbr_stars + ' ⭐ lors d\'un transfert de kamas !');
                                    }
                                    data_user._user[y].kamas_waiting += prix_revent;
                                    data_user._user[y].stars -= nbr_stars;
                                    channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_finances[i]);
                                    if (channel_n)
                                    {
                                        channel_n.send('!DISPLAY_FINANCE 🤖');
                                        channel_n.send('Le membre <@!' + member_cmd.id + '> à perdu ' + nbr_stars + ' ⭐ lors d\'un transfert de kamas !');
                                    }
                                        
                                }else{
                                    message.channel.send('🤖 **L\'échange d\'étoiles est limité à 5 ⭐pour pouvoir effectuer un transfert**');
                                    return;
                                }
                                break;
                        }
      
                    }
                }
                break;
            }
            break;
        }
    }
    if (index_channel_ok == 0)
        message.channel.send('🤖 **Cette command est autorisé dans le canal 『💱』transferts**');
}
exports.TRANSFERT = TRANSFERT;