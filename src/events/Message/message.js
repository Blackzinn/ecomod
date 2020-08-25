var { prefix } = require("config.json");
const { RichEmbed } = require('discord.js');
var { guild } = require("database.js");

module.exports = (client, message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    guild.findById(message.guild.id, "prefix config", (err, guildTable) => {
        if (err) {
            console.log(err);
            return 1;
        }
        if (message.content.indexOf(prefix) === 0) {
            var args = message.content.slice(prefix.length).trim().split(/ +/g);
            var command = args.shift().toLowerCase();
            var cmd = client.commands[command];
            if (cmd) cmd(client, message, args, prefix);
        }
        if (!guildTable) return;
        if (guildTable.config.filtroInvites) worstFiltro(client, message);
    });
};

const min3 = 180000;

/**
 * Esse é o pior filtro que você vai ver em toda sua vida 
 * Obviamente é temporario e não deve ser usado por motivos óbvios
 * (Muitos setTimeout pode dar errado)
 * Mas se você quiser arriscar ta aí
*/
var worstFiltro = async (client, message) => {
    if (!/discord\.gg\/[\d\w]/.test(message.content)) return;
    if (client.inviteFilter[message.guild.id]) {
        let filtro = client.inviteFilter[message.guild.id];
        if (filtro[message.author.id]) {
            let user = filtro[message.author.id];
            user.num += 1;
            if (user.timestamp - message.createdTimestamp <= min3) {
                user.timestamp = message.createdTimestamp;
                clearTimeout(user.timeoutID);
                user.timeoutID = setTimeout(() => {
                    deleteUserEntry(client, message);
                }, min3);
            }
            if (user.num === 3) {
                message.reply(`${client.getEmoji("negado")} Você foi mutado por enviar convite no servidor`);
                let muteRole = message.guild.roles.find(r => r.name === "😡Reth mute🔇");
                if (!muteRole) await message.guild.createRole({ name: "😡Reth mute🔇"}).catch(()=>{});
                if (muteRole) message.member.addRole(muteRole).catch(()=>{});
                deleteUserEntry(client, message);
            } else {
                message.reply(`${client.getEmoji("negadoblue")} Você não pode enviar convites de outros servidores aqui!`);
            }
        } else {
            filtro[message.author.id] = setObj(client, message);
            message.reply(`${client.getEmoji("negadoverde")} Você não pode enviar convites de outros servidores aqui!`);
        }
    } else {
        client.inviteFilter[message.guild.id] = {};
        let filtro = client.inviteFilter[message.guild.id];
        filtro[message.author.id] = setObj(client, message);
        message.reply(`${client.getEmoji("negadoverde")} Você não pode enviar convites de outros servidores aqui!`);   
    }
    message.delete().catch(() => {});
};

var setObj = (client, message) => {
    let timeoutID = setTimeout(() => deleteUserEntry(client, message), min3);
    return {
        num: 1,
        timestamp: message.createdTimestamp,
        timeoutID
    };
};

var deleteUserEntry = (client, message) => {
    clearTimeout(client.inviteFilter[message.guild.id][message.author.id].timeoutID);
    if (Object.keys(client.inviteFilter[message.guild.id]).length === 1) {
        delete client.inviteFilter[message.guild.id];
    } else {
        delete client.inviteFilter[message.guild.id][message.author.id];
    }
};
