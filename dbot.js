const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '!';
cient.on('ready', () =>{
    console.log('this bot is online!');
});

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!');
        break;

    }
});

client.on('message', message=>{
    if(message.content ==="Hey dbot!"){
        message.reply('Hey there!')
    }
});
client.login(process.env.BOT_TOKEN);
