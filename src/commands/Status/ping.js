module.exports = async (client, message) => {
	message.delete();
    var m = await message.channel.send(`Calculando...`);
    m.edit(`Concluído! Latência é ${m.createdTimestamp - message.createdTimestamp}ms${client.getEmoji("lanterna")}.` +
    ` API Latência é ${Math.round(client.ping)}ms${client.getEmoji("lanterna")}`);
};