module.exports = async (client, message) => {
    const moment = require("moment");
    const duration = moment.duration(client.uptime).locale("pt-BR").humanize();
    let botAvatar = client.user.displayAvatarURL;
    let userName = client.user.username;
    const { RichEmbed } = require("discord.js");
    let embed = new RichEmbed()
    .setDescription('**Minhas informações**')
    .setColor('#8e04cf')
    .setThumbnail(botAvatar)
    .addField('• <a:bochecha:710963383603822643> Sobre mim', 'sou um bot unico criado com muito amor! meu criador vem me deixando cada dia mais linda é cheia de utilidades, assim posso ajudar meus amiguinhos nos seus servidores é cativar todos com meus comandos, espero que gostem de tudo! **Beijos da Moon <a:s2:710960841981165679>**')
    .addField('• <a:white_gatofofogh:714323129345900544> Meu nome', userName)
    .addField('• <a:oi:710964132660117546> Olá amiguinho (a) Estou online a', duration)
    .addField('• 👀 Criado em', 'Data: 14/05/2020 \nHorário: 20:59 Horário de Brásilia')
    .addField('• <a:patinho:710962588636414063> Sexo:', 'Feminino')
    .addField('• <:devshiro:714028234244620326> Desenvolvedor:', '<@361583113614262283>')
    .addField('• <a:loading:710964324713103418> Progresso do bot:', '90% Concluída [███████████....]')
    .addField('• <:conectar:710964786963283979> Servidores:', client.guilds.size)
    .addField('• <:pessoa:710965785207767102> Usuários:', client.users.size);

    message.channel.send(embed)
        .then(message => {
            message.delete(40000).catch(()=>{});
        })
        .catch(()=>{});
};
