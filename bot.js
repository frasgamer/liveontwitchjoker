const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});










const adminprefix = "Z";
const devs = ['307666420743798784','313377631783485440'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'play')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'name')) {//fras
client.user.setUsername(argresult).then//fras
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)//fras
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");//fras
} else//fras
  if (message.content.startsWith(adminprefix + 'avatar')) { //fras
client.user.setAvatar(argresult);//fras
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);//fras
      } else     //fras
if (message.content.startsWith(adminprefix + 'streaming')) {//fras
  client.user.setGame(argresult, "https://www.twitch.tv/idk");//Fras
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)//fras
}
});




client.login(process.env.BOT_TOKEN);
