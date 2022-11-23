const Discord = require("discord.js"); 
const { Intents } = require('discord.js');
const client = new Discord.Client({intents: 32});
const prefix = ("zm.");

client.on('message', message => {
  if (message.content === prefix + 'ping') {  
    message.channel.send(`🏓 A Latência da API é ${Math.round(client.ws.ping)}ms`);
  }
});





const token = ("OTg0NjY5MDEzMTE0MjQ1MTkx.GrRjs2.uEU3C2x9KdFku4-nktvZtXoIvyJlGe_3hIuqDE");



client.login(token);