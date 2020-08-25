module.exports = (client, message, args) => {
	message.delete();
    client.commands.registrar(client, message, args);
};