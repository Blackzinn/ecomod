const { RichEmbed } = require("discord.js");

module.exports = (client, prefix) => {
    let embed = new RichEmbed()
    .setTitle(`${client.getEmoji("shiro1")} | Status`)
    .setDescription(`**•Prefixo: ${prefix}**\n\n` +
    `${prefix}info | Info do bot.\n` +
    `${prefix}bot | Mostra as informações sobre o BOT.\n` +
    `${prefix}server | Mostra as informações do servidor atual.\n` +
    `${prefix}ping | Informa a latência e o ms do bot.\n` +
    `${prefix}memoria | Informa a quantidade de memoria que o bot está utilizando.\n`)
    .setColor("#8e04cf")
    .setThumbnail(client.getEmoji("moonav").url)
    .setFooter("Página 7 de 9");
    return embed;
};