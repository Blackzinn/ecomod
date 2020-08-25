module.exports = async (client, message) => {
	message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR", false, true, true)) {
        return message.reply("Voce nao tem permissao para isso <:noswift:529635602292015134>").catch(()=>{});
    }
    if (!message.guild.me.hasPermission("ADMINISTRATOR", false, true)) {
        return message.reply("nao tenho permissao para isso <:noswift:529635602292015134>").catch(()=>{});
    }
    if (message.mentions.roles.size < 1) return message.channel.send("Marque um cargo").catch(()=>{});

    var role = message.mentions.roles.first();
    
    if (message.guild.me.highestRole.comparePositionTo(role) < 0) {
        return message.channel.send("<a:X_:719022922722705478> Eu preciso estar acima do cargo mencionado").catch(()=>{});
    }

    await message.channel.send(`<a:Confirmado:719268614360006727> Começando o Cargo a Todos Aguarde. | 0/${message.guild.memberCount}`)
        .then(m => {
            message.guild.fetchMembers()
                .then(async guilda => {
                    let membros = guilda.members.array();
                    await f(membros, 0, role, m);
                })
                .catch(()=>{});
        })
        .catch(()=>{});
};

var f = async (membros, i = 0, role, message) => {
    if (i % 20 === 0) {
        await message.edit(`${i}/${message.guild.memberCount}`).catch(()=>{});
    }
    if (membros[i]) {
        await membros[i].addRole(role, "Sistema de Registro Shiro | Cargo para Todos").catch(()=>{});
    }
    ++i;
    if (i < message.guild.memberCount) {
        setTimeout(() => f(membros, i, role, message), 500);
    } else {
        await message.edit("Completo").catch(()=>{});
    }
};
