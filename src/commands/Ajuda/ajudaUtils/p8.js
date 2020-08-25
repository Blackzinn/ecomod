const { RichEmbed } = require("discord.js");

module.exports = (client, prefix) => {
    let embed = new RichEmbed()
    .setTitle(`${client.getEmoji("musicmoon")} | Música`)
    .setDescription(`**•Prefixo: ${prefix}**\n\n` +
    `${prefix}play • Adiciona uma música à lista para tocar.\n` +
    `${prefix}stop • Encerra a queue.\n` +
    `${prefix}pause • pausa a música que está tocando no momento.\n` +
	`${prefix}resume • Continua a música que foi pausada.\n` +
    `${prefix}skip • Pulo a música que está tocando atualmente.\n` +
    `${prefix}np • Mostra a música que está tocando agora.\n` +
    `${prefix}volume • Aumenta/Abaixa o volume da música.\n` +
    `${prefix}join • Entro no canal de voz que você está.\n` +
    `${prefix}queue • Mostra as músicas que tem na fila.\n` +
    `${prefix}leave • Saio do canal de voz que você está.\n`)
    .setColor("#8e04cf")
    .setThumbnail(client.getEmoji("moonav").url)
    .setFooter("Página 8 de 9");
    return embed;
};