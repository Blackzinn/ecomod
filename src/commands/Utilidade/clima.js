const { RichEmbed } = require("discord.js");
const weather = require("weather-js");

module.exports = async (client, message, args) => {
	message.delete();
    if (args.length < 1) {
        message.channel.send("**Mencione o local**");
        return 0;
    }
    weather.find({search: args.join(' '), degreeType: 'C', lang: 'pt-BR'}, (err, result) => {
        if (err) throw err;
        result = result[0]; 
        if (!result) {
            message.channel.send("**Fale um local valido!**");
            return;
        }
        var current = result.current;
        var location = result.location;
        const embed = new RichEmbed()
        .setAuthor(`Tempo para ${location.name}`)
        .setDescription(`**${current.skytext}**`)
        .addField("Fuso horário",`UTC${location.timezone >= 0 ? "+" : ""}${location.timezone}`, true)
        .addField("Tipo de grau", location.degreetype, true)
        .addField('Temperatura',`${current.temperature}°C`, true)
        .addField('Sensação térmica', `${current.feelslike}°C`, true)
        .addField('Ventos', current.winddisplay, true)
        .addField('Umidade', `${current.humidity}%`, true)
        .setThumbnail("https://i.imgur.com/qJbDQNI.gif")
        .setColor("RANDOM")
        .setTimestamp();
        message.channel.send({embed});
    });
};