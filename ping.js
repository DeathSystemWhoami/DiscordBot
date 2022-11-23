const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js')
const Discord = require("discord.js")

module.exports = {
    name: "ping", // Coloque o nome do comando do arquivo
    aliases: ["p"], // Coloque sinônimos aqui

    run: async(client, message, args) => {

      

    const Ping = client.ws.ping;

    const embed = new Discord.MessageEmbed()
      .setTitle('🏓 Ping')
      .setColor('#4b64d5')
      .setDescription(`** Olá ${message.author}, o Ping do bot é de \`${Ping} ms\`.**`)

    const embed2 = new Discord.MessageEmbed()
      .setTitle('🏓 Ping')
      .setColor('#4b64d5')
      .setDescription(`** Olá ${message.author}, o Ping do bot atualizado é de \`${Ping} ms\`.**`)

    const row = new Discord.MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('1')
          .setPlaceholder('Atualizar ping 🏓')
          .addOptions([
            {
              label: 'Atualizar!',
              emoji: '🏓',
              value: '1',
            },
          ])
      )
    message.reply({ embeds: [embed], components: [row] }).then(msg => {
      const filtro = (interaction) =>
        interaction.isSelectMenu()

      const coletor = msg.createMessageComponentCollector({
        filtro
      });
      coletor.on('collect', async (collected) => {
        let ticket = collected.values[0]
        collected.deferUpdate()

        if (ticket === '1') {


          msg.edit({ embeds: [embed2] })


        }
      })
    })
  }
}
