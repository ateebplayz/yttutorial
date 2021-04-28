const Discord = require('discord.js') //defining djs
const client = new Discord.Client()
const command = require('./command')
const express = require('express')
const app = express()
const port = 3000;
app.get('/', (req, res) => res.send('Webserver Connected!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
client.on('ready', async () => {
  console.log('I am now online!!')

//now that our basic index.js is setup we can move onto the next step!
//lets start by making a ping pong command!
command(client, ['ping', 'Ping'], (message) => {
  message.channel.send('pong!')
  })
})
client.login(`ODM3MDQxNTczNzI3Njk4OTg0.YImxtg.X-z1HRvD01HG6SjVnyRbI6bNMkE`)