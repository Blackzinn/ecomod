const { RichEmbed } = require("discord.js");

module.exports = (client, prefix) => {
    let embed = new RichEmbed()
    .setTitle(`${client.getEmoji("suporte3CLARO")} | Configurações`)
    .setDescription(`**•Prefixo: ${prefix}**\n\n` +
    `${prefix}config | Painel de configuração da aba Registro.\n` +
    `${prefix}welcome | Painel de configuração da aba Bem-vindo.\n` +
    `${prefix}autorole | Configuração de auto-role para novos membros que entram no servidor receber a tag setada.\n` +
    `${prefix}eventlog | Painel de configuração da aba de Log.\n` +
    `${prefix}contador | Painel de configuração do contador.\n` +
    `${prefix}edit | Painel para definir o canal de punições.`)
    .setColor("#8e04cf")
    .setThumbnail(client.getEmoji("moonav").url)
    .setFooter("Página 2 de 9");
    return embed;
};