const { RichEmbed } = require("discord.js");

module.exports = (client, prefix) => {
    let embed = new RichEmbed()
    .setTitle(`${client.getEmoji("registro")} | Registro`)
    .setDescription(`**•Prefixo: ${prefix}**\n\n` +
    `${prefix}registrar/registrado: Registra a pessoa mencionada!\n` +
    `${prefix}registrador: Mostra quantas pessoas você registrou!\n` +
    `${prefix}registrou: Mostra quem te registrou no servidor!\n` +
    `${prefix}registros: Mostra os top 5 registradores do servidor.\n` +
    `${prefix}registrados: Mostra o total de pessoas registrada no servidor.\n`)
    .setColor("#8e04cf")
    .setThumbnail(client.getEmoji("moonav").url)
    .setFooter("Página 4 de 9");
    return embed;
};