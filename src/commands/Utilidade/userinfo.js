module.exports = (client, message) => {
	message.delete();
    client.commands.perfil(client, message);
};