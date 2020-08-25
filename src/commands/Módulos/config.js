var { guild, createNewGuildEntry} = require("database.js");
const config = require("config.json")

module.exports = (client, message, args, prefix) => {
	message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR", false, true, true)) {
        message.reply("**Você não possui permissões para utilizar esse comando!**");
        return 0;
    }
    guild.findById(message.guild.id, "config", (error, guildTable) => {
        if (error) {
            console.log(error);
            return 1;
        }
        if (!guildTable) {
            createNewGuildEntry(message.guild.id);
            message.reply("Use o comando novamente");
            return 1;
        }
        if (args.length < 1) {
            client.configUtils.default(client, message, args, prefix, guildTable.config);
            return 0;
        }
        var cmd = client.configUtils[args[0]];
        if (cmd) {
            cmd(client, message, args, guildTable);
        } else {
            client.configUtils.typo(message);
        }
    });
};