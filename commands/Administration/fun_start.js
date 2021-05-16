const Discord = require('discord.js');
const { fun_welcome_create } = require('../Tutoriel/create_tuto/fun_welcome_create');
data_tuto = require('../../data/structjson/tutoriel.json');

async function fun_start(message, command, client)
{
    fun_welcome_create(message, command);
}
exports.fun_start = fun_start;
