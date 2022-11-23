const { MessageActionRow, MessageSelectMenu, MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
module.exports = {
  name: 'help',
  run: async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('Veja meus comandos')
    .setDescription(`Ola ${message.author}, para ver dos meus comando utilize o painel abaixo`)
    .setColor('RANDOM')
    .setFooter('Help')

    const embed2 = new Discord.MessageEmbed()
    .setTitle('Moderação')
    .setDescription(`Em breve`)
    .setColor('RANDOM')
    .setFooter('Moderação')

    const embed3 = new Discord.MessageEmbed()
    .setTitle('Diversão')
    .setDescription(`Em breve`)
    .setColor('RANDOM')
    .setFooter('Diversão')

    const embed4 = new Discord.MessageEmbed()
    .setTitle('Economia')
    .setDescription(`Em breve`)
    .setColor('RANDOM')
    .setFooter('Economia')

const embed5 = new Discord.MessageEmbed()
    .setTitle('Utilitarios')
    .setDescription(`z.ping | z.help`)
    .setColor('RANDOM')
    .setFooter('Utilitarios')
    
    const row = new Discord.MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId('1')
      .setPlaceholder('Clique aqui!')
      .addOptions([
        {
          label: '彡Painel Inicial',
          emoji: '🏠',
          value: '1',

        },

        {
          label: '彡Moderação',
          emoji: '🔨',
          value: '2',
        }, 
        {
        label: '彡Diversão',
        emoji: '🎱',
        value: '3',
        },
        {
          label: '彡Economia',
          emoji: '💸',
          value: '4',

        },
        {
          label: '彡Utilitarios',
          emoji: '🔗',
          value: '5',

          }
      ])
    )
    message.channel.send({ embeds: [embed], components: [row]})
.then(msg=>{
			const filtro = (interaction) => 
            interaction.isSelectMenu()
      
          const coletor = msg.createMessageComponentCollector({
            filtro
          });
      coletor.on('collect', async(collected)=>{
				 let ticket = collected.values[0]
            collected.deferUpdate()

						if(ticket === '1'){
							 msg.edit({embeds: [embed]})
              
              
						}
						if(ticket === '2'){
							msg.edit({embeds: [embed2]})
						}
        if(ticket === '3'){
          msg.edit({embeds: [embed3]})
        }
        if(ticket === '4'){
          msg.edit({embeds: [embed4]})
        }
        if(ticket === '5'){
          msg.edit({embeds: [embed5]})
                }
			})
		}) 
			
}  
    }