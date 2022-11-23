const discord = require('discord.js')
const Canvas = require('canvas')
const { fillTextWithTwemoji } = require('node-canvas-with-twemoji-and-discord-emoji');
//puxa a fonte helksink de algum diretório da sua escolha, é só mudar os ././, a fonte helksink é a que eu deixei pra download la no servidor.
const { registerFont } = require('canvas')
registerFont('../helsinki.ttf', { family: 'helsinki' })
registerFont('../bold.ttf', { family: 'bold' })
const config = require('../config.json');

const db = require("quick.db")


module.exports = {

    name: "perfil",
    description : "Veja o perfil de alguém!",
 
options: [
        {
            name: "user",
            description: "O usuário que quer ver o perfil",
            type: "USER",
            required: true
        
    },
    ],
        run : async (client, interaction, args) => {
          const canvas = Canvas.createCanvas(850, 550)
    const ctx = canvas.getContext("2d")

//pega o avatar
let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
    // a imagem de fundo, (wallpaper)
          let imagem = db.get(`imagem_${user.id}`)
  if(!imagem) imagem = `https://media.discordapp.net/attachments/980553631310942210/983425184172224654/1654537185896.png`
   const fundo = await 

    Canvas.loadImage(`${imagem}`)
    ctx.drawImage(fundo, 0, 0, canvas.width, canvas.height)


// o layout, a imagem onde fica as demarcaçoes dos lugares dos textos (é só abrir esse link ae embaixo que tu vai entender)
const layout = await 
    Canvas.loadImage("https://media.discordapp.net/attachments/980553631310942210/983771341788434482/20220606_162435.png")

    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)
const member = client.guilds.cache.get('833470549900263465').members.cache.get(interaction.user.id); 
// escreve o nome da pessoa
ctx.font = '30px helsinki';
ctx.fillStyle = '#F8F8F8';
//ctx.fillText(`${user.username}`, 340, 73)
      const img = await Canvas.loadImage("https://media.discordapp.net/attachments/897960647596343347/989718528296894544/kimetsu.png?width=759&height=427");

    try {
      if (
        interaction.member.roles.cache.has("897963631617146900")
      ) {
        ctx.drawImage(img, 20, 480, 50, 50);
      }
    } catch (error) {
      console.log(" ");
    }
// cria uma mascara redonda pra imagem de avatar
ctx.beginPath();
      ctx.arc(723, 108, 94, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
 
     // coloca o avatar do user na imagem
    const TargetAvatar = await Canvas.loadImage(`${avatar}`)
    ctx.drawImage(TargetAvatar, 628, 12, 193, 193)
//Badges
    const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'perfil.png')
        return interaction.followUp({content: `${interaction.user}`, files: [attachment], ephemeral: true})
      
    }
}