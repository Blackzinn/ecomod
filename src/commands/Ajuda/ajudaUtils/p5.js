const { RichEmbed } = require("discord.js");

module.exports = (client, prefix) => {
    let embed = new RichEmbed()
    .setTitle(`${client.getEmoji("feliz")} | Entretenimento`)
    .setDescription(`**•Prefixo: ${prefix}**\n\n` +
    `~~${prefix}ship~~\n` +
    `${prefix}gato\n` +
    `${prefix}matar\n` +
    `${prefix}emoji\n` +
    `${prefix}yaoi\n`)
    .setColor("#8e04cf")
    .setThumbnail(client.getEmoji("moonav").url)
    .setFooter("Página 5 de 9");
    return embed;
};