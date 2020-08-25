module.exports = client => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
  
let status = [
 { name: `Meu prefixo e: m.ajuda`, type: 'STREAMING', url: 'https://www.twitch.tv/blackzinn0171'},
 { name: `Obrigado por utilizar mes comandos ❤️`, type: 'STREAMING', url: 'https://www.twitch.tv/blackzinn0171'},
 { name: `Encontrou falhas? Reporte para o suporte`, type: 'STREAMING', url: 'https://www.twitch.tv/blackzinn0171'},
 { name: `Saiba como me adicionar pelo s.ajuda`, type: 'STREAMING', url: 'https://www.twitch.tv/blackzinn0171'},
 { name: `Para ${client.users.size} usuarios`, type: 'STREAMING', url: 'https://www.twitch.tv/blackzinn0171'},
 { name: `Em ${client.guilds.size} servidores`, type: 'STREAMING', url: 'https://www.twitch.tv/blackzinn0171'}
]
    
 setInterval(function() {
    let randomStatus = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ game: randomStatus });
    }, 1000)
};