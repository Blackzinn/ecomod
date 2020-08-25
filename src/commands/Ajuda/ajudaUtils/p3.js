const { RichEmbed } = require("discord.js");

module.exports = (client, prefix) => {
    let embed = new RichEmbed()
    .setTitle(`${client.getEmoji("punido")} | Gerenciamento`)
    .setDescription(`**•Prefixo: ${prefix}**\n\n` +
    `${prefix}lock: Trava o chat contra flood e ataques.\n` +
    `${prefix}unlock: Destrava o chat.\n` +
	`${prefix}cargoall: Da cargo ate 5 cargos para todos do servidor.\n` +
    `${prefix}softban: Bane e desbane o usuário mencionado.\n` +
    `${prefix}caifora: Bane a pessoa sem notificar no privado.\n` +
    `${prefix}vaza: Bane o usuário por ID ou menção e notifica no privado\n` +
    `${prefix}ban: Bane o usuário por ID ou menção!\n` +
    `${prefix}unban: Desbane o usuário por ID!\n` +
    `${prefix}allunban: Desbane todos usuários banidos do seu servidor.\n` +
    `${prefix}mute: Muta o usuário mencionado.\n` +
    `${prefix}unmute: Desmuta o usuário mutado.\n` +
    `${prefix}clear: Limpa o chat. (Max 99 mensagens)\n` +
    `${prefix}adv: Adiciona uma advertência no usuário mencionado.\n` +
    `${prefix}radv: Remove a advertência do usuário.`)
    .setColor("#8e04cf")
    .setThumbnail(client.getEmoji("moonav").url)
    .setFooter("Página 3 de 9");
    return embed;
};