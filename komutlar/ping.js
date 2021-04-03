const Discord = require('discord.js')

exports.run = (client, message, params) => {
  
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle("Pluto Ping Sistemi")
  .addField("API Gecikmesi:", `**${client.ws.ping}** ms!`)
  .addField("Mesaj Gecikmesi:", `**${message.createdTimestamp - message.createdTimestamp}**`)
  .setFooter(`Pluto | Ping Sistemi`)
  message.channel.send(embed)
  }
exports.conf = {
  enable: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
}
exports.help = {
  name: "ping",
  description: "botun pingini gösterir.",
  usage: "ping"
}