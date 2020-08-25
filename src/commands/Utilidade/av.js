module.exports = (client, message) => {
	message.delete();
    client.commands.avatar(client, message);
};