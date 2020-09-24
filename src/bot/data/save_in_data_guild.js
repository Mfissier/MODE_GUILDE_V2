const Discord = require('discord.js');
const client = new Discord.Client();

function Listen_in_data(name, txt, dir){
    //changement des  argument en 1: le nom/ 2: le texte / 3: le chemin
    const fs = require('fs');
    let tmpstr = 0;
    fs.writeFileSync(dir + name, txt, (err)=> {
        if (err){ 
            console.log("An error happened");
            return(1);
        }
        else
            return(0);
    });
}

exports.Listen_in_data = Listen_in_data;