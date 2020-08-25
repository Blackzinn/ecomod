const { RichEmbed } = require("discord.js");

module.exports = (client, prefix) => {
    let embed = new RichEmbed()
    .setTitle(`${client.getEmoji("utilidade")} | Utilidade`)
    .setDescription(`**•Prefixo: ${prefix}**\n\n` +
    `${prefix}perfil/userinfo: Mostra suas informações no servidor.\n` +
    `${prefix}clima: Mostra o clima da sua cidade\n` +
    `${prefix}say: Fala pelo bot.\n` +
    `${prefix}fake: Mostra as informações de sua conta.\n` +
    `${prefix}div: Mostra o total de membros recrutados por si no servidor.\n` +
    `${prefix}divulgador: Mostra os convites criados por si e o total de membros que entram pelos respetivos convite.\n` +
    `${prefix}divulgadores: Top 5 divulgadores do servidor.\n`)
    .setColor("#8e04cf")
    .setThumbnail(client.getEmoji("moonav").url)
    .setFooter("Página 6 de 9");
    return embed;
};