const Discord = require('discord.js');
const client = new Discord.Client();

var fs = require('fs');
const { cpuUsage } = require('process');

function mkdir (dirPath, callback) {
  fs.mkdir(dirPath, (err) => {
      if (err)
        console.log(err);
    else
        console.log('Le dossier a bien été cree');
  });
}

exports.mkdir = mkdir;