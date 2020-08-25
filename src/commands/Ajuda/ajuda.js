module.exports = async (client, message, args, prefix) => {
message.delete();
    var utils = client.ajudaUtils;
    var paginas = [
        utils.p1(client, prefix),
        utils.p2(client, prefix),
        utils.p3(client, prefix),
        utils.p4(client, prefix),
        utils.p5(client, prefix),
        utils.p6(client, prefix),
        utils.p7(client, prefix),
        utils.p8(client, prefix),
    ];
    var emojis = [
        client.getEmoji("voltarmoon"),
        client.getEmoji("0moon"),
        client.getEmoji("1moon"),
        client.getEmoji("2moon"),
        client.getEmoji("3moon"),
        client.getEmoji("4moon"),
        client.getEmoji("5moon"),
        client.getEmoji("6moon"),
    ];
    let msg = await message.channel.send(paginas[0]);
    const filter = (reaction, user) => {
        // A linha 31/32 desse arquivo ja filtra os emojis entao essa abaixo se torna inutil
        return /*emojis.some(e => e.name === reaction.emoji.name || e === reaction.emoji.name) &&*/ user.id === message.author.id;
    };
    msg.createReactionCollector(filter, {time: 4000 * 60}).on("collect", async e => {
        let index = emojis.findIndex(i => i.name ? i.name === e.emoji.name : i === e.emoji.name);
        if (index < 0) return;
        await msg.edit(paginas[index]).catch(()=>{});
		e.remove(message.author)
    }).on("end", () => {
        msg.delete().catch(()=>{});
    });
    // Nao troque este 'for' por um 'forEach'
    // Alem de ser mais lento os emojis vao estar na ordem errada
    for (let i = 0; i < emojis.length; ++i) {
        await msg.react(emojis[i]).catch(()=>{});
    }
};