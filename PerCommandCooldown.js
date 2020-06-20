/*

This is mainly used for Discord.js cooldowns but I guess you can
change them for your needs

Requirements: 
> discord.js@^12.2.0          (https://www.npmjs.com/package/discord.js)
> humanize-duration@^3.23.1   (https://www.npmjs.com/package/humanize-duration)

*/

const Discord = require('discord.js');
const humd = require('humanize-duration');

const cooldowns = {
  // Categories - You can add more, this is just an example
  "others": {
    // Commands - Same with commands, you can add more (that was the main reason of this snippet)
    "prefix": new Set()
  }
}

client.on("ready", s => {
  // .. your code ..
})

client.on("message", m => {
    // I really recommend you to have this: https://discordjs.guide/creating-your-bot/commands-with-user-input.html (if you dont have a command handler)
    if(command == "prefix") {
      /* Cooldown */
      let cooldownT = 30 * 1000, cooldownG = cooldowns.others.prefix.get(m.author.id);
      if(cooldownG) return m.channel.send(`Please wait ${humd(cooldownG - Date.now(), { round: true })} before running ${command} again`);
      cooldowns.others.prefix.set(m.author.id, Date.now() + cooldownT);
      setTimeout(() => cooldowns.others.prefix.delete(m.author.id), cooldownT);
            
      /* Actual command */
      // .. your command code ..
    }
})

client.login(/* your token */);
