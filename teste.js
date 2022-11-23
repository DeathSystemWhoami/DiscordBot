const Discord = require('discord.js')


module.exports = {
    name: "teste",
    run: async (client, interaction, args) => {
        



let user = client.users.cache.get("765414804361838662") //coloque seu id aq pra a sugestão ser enviado no seu pv

const sugestão = interaction.options.getString('sugestão')



const embed = new Discord.MessageEmbed()



.setFooter(`${client.user.username}`, client.user.displayAvatarURL())

.setTimestamp()

.setColor("#000001")

.setTitle(``)

.addFields(

{

name: "📩 | Sugestão enviada:", 

value: `\n\`\`\` ${sugestão}\`\`\``,

inline: true

}, 

{

name: "⠀",

value: `📌 |  \`${interaction.user.tag}\` \n 

📌 |  \`${interaction.user.id}\``,

inline: false

})

const embed30 = new Discord.MessageEmbed()

.setDescription(`📎 | ${interaction.user} Sua sugestão foi enviado com sucesso`)

.setColor("#009e0b")

interaction.reply({embeds: [embed30]})



user.send({embeds: [embed]})

}

  }