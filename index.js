//----------> Index principal:

const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("./config.json"); 
client.login(config.token); 
client.once('ready', async () => {

    console.log(`📂 -> O bot foi conectado na index.js\n⚙️  -> O bot conseguiu encontrar a config.json!\n📍 -> Usando: ${config.prefix}help Você obtem informações.\n🤖 -> Nome do bot: ${client.user.tag}\n💎 -> Gerenciando: ${client.guilds.cache.size} servidores!\n💻 -> Tendo acesso a ${client.channels.cache.size} canais!\n🚀 -> Contendo: ${client.users.cache.size} usuarios me usando!\n🏓 -> Latência: ${client.ws.ping} de ping!` )
//isso aparece quando voce liga o bot!
})

//-------->Handler prefix
client.on('messageCreate', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

//----------> Handler Slash


module.exports = client;
client.commands = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.config = require("./config.json");
require("./handler")(client);
const { glob } = require("glob"); // Utilize no terminal: npm i glob
const { promisify } = require("util"); // Utilize no terminal: npm i util

const globPromise = promisify(glob);

client.on("interactionCreate", async (interaction) => {

    if (interaction.channel.type === "dm") return;
  
    if (interaction.isCommand()) {

        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);

 const { owners } = require("./config.json");
 if (cmd) {
  if (cmd.ownerOnly) {
 if (!owners.includes(interaction.user.id)) {
 let ownerOnly = new Discord.MessageEmbed()
  .setDescription( "*Somente meu dono pode usar isso!*" )
  return interaction.followUp({embeds : [ownerOnly] });
 }}
 }
        if (!cmd)
            return interaction.followUp({ content: "Ixi, muitos erro poucas soluções" });

        const args = [];



        for (let option of interaction.options.data) {


            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
   

        cmd.run(client, interaction, args);
    }


    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
        
    }
});

//----------> Status do bot:

//----------> Marcar o bot, e ele responder:

  client.on("messageCreate", message => {
    
    if (message.author.bot) return;
    if (message.channel.type == '')
    return
    if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
    let bot = new Discord.MessageEmbed()
    .setTitle(`\📃 Minhas informações`)
    .setColor("RANDOM")
    .setDescription(`\n** \📌 -> Meu prefixo é: ${config.prefix}\n \🚀 -> Meus desenvolvedores:\n > <@765414804361838662>\n > <@819193506659958814>\n > <@224162000031186945>\n > <@971986769702686780>\n \🧢 Veja todos meus comandos usando: ${config.prefix}help**`)//oque aparece em baixo!
    message.channel.send({ embeds: [bot] })
    }
});

//----------> welcome 

client.on("guildMemberAdd", async (member) => {

  let guild = client.guilds.cache.get("984675133698494464");
  let channel = client.channels.cache.get("984707928974065664");
  const cargo = member.guild.roles.cache.get("984676485573005312")

  if (guild != member.guild) {

    return console.log ("Um membro entrou em outro servidor");

  } else {

    member.roles.add(cargo)
    
    let entrada = new Discord.MessageEmbed()
    .setTitle (`Bem vindo(a) ao ...`)
    .setDescription(`**${member.user}, Seja bem vindo(a) ao *${guild.name}*\nPor Favor leia as Regras em <#984682181458817096>\nAtualmente estamos com ${guild.memberCount} usuários.**`)
    .setAuthor (member.user.tag, member.user.displayAvatarURL())
    .setColor("RANDOM")
      .setImage('https://media.discordapp.net/attachments/978544714720628736/984668176044412969/1654833564531.jpg')
    .setFooter('ID do usuário: ' + member.user.id)
    .setTimestamp();

    await channel.send({ embeds: [entrada] })
  }
}); 

        
//----------> Logs


// log



//----------> Xp


