const { RichEmbed } = require("discord.js");

module.exports = client => {
    let embed = new RichEmbed()
    .setTitle(`*Olá, eu sou a Moon, seja bem-vindo ao meu painel de comandos*`)
    .setDescription("")
    .addField('Links:', `[Me Adicione em seu servidor](https://discord.com/oauth2/authorize?client_id=703404231838793828&scope=bot&permissions=8)\n[Meu servidor](https://discord.gg/DWxFq2u)`)
    .addField('> **Defesa e Segurança:**', `<:0moon:731076032626425896> | Configurações\n<:1moon:731076032286949440> | Gerenciamento\n\<:2moon:731076032576356413> | Registro\n`, true)
    .addField('> **Opções:**', `<:3moon:731076032500727850> | Entretenimento\n<:4moon:731076032714768465> | Utilidade\n<:5moon:731076032748191785> | Status\n<:6moon:731076032798654494> | Música`, true)        
    .setColor("#8e04cf")
    .setThumbnail(client.getEmoji("moonav").url)
    .setFooter("Página 1 de 10");
    return embed;
};

