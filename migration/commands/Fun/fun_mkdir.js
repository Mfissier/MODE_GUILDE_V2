const Discord = require('discord.js');
var fs = require('fs');
const { cpuUsage } = require('process');

function fun_mkdir(dirPath) {
  fs.mkdir(dirPath, (err) => {
      if (err)
        console.log(err);
      else
        console.log('Le dossier a bien été cree');
  });
}
exports.fun_mkdir = fun_mkdir;