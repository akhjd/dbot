const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njc2Mzk5NTE3MzMxMDk1NTUy.XkFdgg.sdJ91nN7ktUhxNzvswhUVAAxvBw'

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('this bot is online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!');
        break;

    }
})

bot.on('message', message=>{
    if(message.content ==="Hey dbot!"){
        message.reply('Hey there!')
    }
})

bot.login(token);
