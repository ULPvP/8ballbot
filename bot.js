const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = "ul!"
const game = "Created by OldBear"
const token = process.env.token
client.once('ready', function(){
	console.log("Bot opened")
	client.user.setActivity(game);

})
client.on('message', message => {
var args = message.content.substring(prefix.length).split(" ");

if (!args[2])
return message.reply("請問一個問題");

let replies = ["Yes" , "No" , "IDK" , "不確定"]
let result = Math.floor((Math.radom() * replies.length));
let question = args.slice(0).join(" ");
let embedmsg = new MessageEmbed()
.setAuthor(message.author.tag)
.setColor('#ff8c00')
.addField("問題" , question)
.addField("答案", replies([result]));
message.channel.send(embedmsg);
});
client.login(token)
