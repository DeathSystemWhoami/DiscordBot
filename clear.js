const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {

    name: 'clear',
    
    run: async (client, message, args) => {

        let clearchannel = message.guild.channels.cache.get("984684132426723358"); //// CANAL DAS LOGS 

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`${message.author} **Você não tem permissão para usar esse comando**`)

        try {

            let delamount = args[0];

            let msg_del = parseInt(delamount) + 1

            let incomplet = new MessageEmbed()

                .setTitle(`🧹 | CLEAR MESSAGES`)

                .setColor("RED")

                .setDescription(`**\n📋 | Use este comando para limpar o chat.\n\n❓ | Como eu uso? Use assim: z.clear (mensagens) \n\n📜 | Exemplo: z.clear 10**`)

            if (isNaN(delamount) || parseInt(delamount <= 0)) return message.reply({ embeds: [incomplet] })

            if (parseInt(delamount) > 99) return message.reply('❌ | **Você so pode limpar de 1 a 99 mensagens!**')

            await message.channel.bulkDelete(parseInt(delamount) + 1, true);

            let clear = new MessageEmbed()

                .setColor("RANDOM")

                .setThumbnail(``)

                .setDescription(`**> 🧹 | Foram limpas ${delamount} no canal ${message.channel}.\n\n> 🎓 | Autor: ${message.author}**`)

            if (!clearchannel) {
                return message.channel.send("**:x: |Não encontrei o canal clear logs.**");
            }

            clearchannel.send({ embeds: [clear] });

        } catch (e) {

            console.log(e)

        }
    }
}  
