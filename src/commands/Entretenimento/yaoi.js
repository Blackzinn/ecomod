const { RichEmbed } = require("discord.js");

var imageArr = [
    "https://cdn.discordapp.com/attachments/692896666315128912/711316674208596089/yaoi.jpg",
    "https://cdn.discordapp.com/attachments/692896666315128912/711316664570085406/yaoi2.jpg",
    "https://cdn.discordapp.com/attachments/692896666315128912/711316650409984010/yaoi3.jpg",
    "https://cdn.discordapp.com/attachments/692896666315128912/711316642914631690/yaoi4.jpg"
];

module.exports = (client, message, args) => {
	message.delete();
    if (args.length < 1) {
        return message.channel.send(setEmbed(client, message));
    }
    let target = message.mentions.users.first();
    if (!target) return;
    message.channel.send(setEmbed(client, message, target));
};

/**
 * Facilita a construção da embed
 * @param {Object} target O individuo marcado]
*/
var setEmbed = (client, message, target = 0) => {
    let embed = new RichEmbed()
    .setColor("#8e04cf")
    .setFooter(message.guild.name, message.guild.iconURL)
    .setTimestamp();
    if (target === 0) {
        embed.setTitle(`Foto yaoi pronta. ${message.author.username}`)
        .setImage("https://cdn.discordapp.com/attachments/692896666315128912/711316674208596089/yaoi.jpg");
    } else if (target.id === message.author.id) {
        embed.setTitle(`Parece que você gosta mesmo disso. ${message.author.username}`)
        .setImage("https://cdn.discordapp.com/attachments/692896666315128912/711316664570085406/yaoi2.jpg");
    } else {
        embed.setTitle(`${message.author.username} Matou ${target.username} ${client.getEmoji("cafazin")}`)
        .setImage(imageArr[Math.floor(Math.random() * imageArr.length)]);
    }
    return embed;
};