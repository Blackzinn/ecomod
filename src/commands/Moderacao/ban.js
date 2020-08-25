module.exports = (client, message, args) => {
	message.delete();
    // Funcionamento igual ao vaza, então é melhor redirecionar de uma vez
    client.commands.vaza(client, message, args);
};