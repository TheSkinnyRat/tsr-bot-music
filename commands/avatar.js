const { MessageEmbed, MessageReaction } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Display the avatar of the user",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["ava", "pfp", "profile"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    const user = message.mentions.users.first() || message.author;

    let Config = new MessageEmbed()
      .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }));
    message.channel.send(Config);
  },

  // SlashCommand: {
  //   options: [
  //     {
  //       name: "prefix",
  //       description: "Check the bot's prefix",
  //       type: 1,
  //       required: false,
  //       options: [
  //         {
  //           name: "symbol",
  //           description: "Set the bot's prefix",
  //           type: 3,
  //           required: false,
  //         },
  //       ],
  //     },
  //     {
  //       name: "dj",
  //       description: "Check the DJ role",
  //       type: 1,
  //       required: false,
  //       options: [
  //         {
  //           name: "role",
  //           description: "Set the DJ role",
  //           type: 8,
  //           required: false,
  //         },
  //       ],
  //     },
  //   ],
  //   /**
  //    *
  //    * @param {import("../structures/DiscordMusicBot")} client
  //    * @param {import("discord.js").Message} message
  //    * @param {string[]} args
  //    * @param {*} param3
  //    */
  //   run: async (client, interaction, args, { GuildDB }) => {
  //     let config = interaction.data.options[0].name;
  //     let member = await interaction.guild.members.fetch(interaction.user_id);
  //     //TODO: if no admin perms return...
  //     if (config === "prefix") {
  //       //prefix stuff
  //       if (
  //         interaction.data.options[0].options &&
  //         interaction.data.options[0].options[0]
  //       ) {
  //         //has prefix
  //         let prefix = interaction.data.options[0].options[0].value;
  //         await client.database.guild.set(interaction.guild.id, {
  //           prefix: prefix,
  //           DJ: GuildDB.DJ,
  //         });
  //         client.sendTime(
  //           interaction,
  //           `The prefix has now been set to \`${prefix}\``
  //         );
  //       } else {
  //         //has not prefix
  //         client.sendTime(
  //           interaction,
  //           `The prefix of this server is \`${GuildDB.prefix}\``
  //         );
  //       }
  //     } else if (config === "djrole") {
  //       //DJ role
  //       if (
  //         interaction.data.options[0].options &&
  //         interaction.data.options[0].options[0]
  //       ) {
  //         let role = interaction.guild.roles.cache.get(
  //           interaction.data.options[0].options[0].value
  //         );
  //         await client.database.guild.set(interaction.guild.id, {
  //           prefix: GuildDB.prefix,
  //           DJ: role.id,
  //         });
  //         client.sendTime(
  //           interaction,
  //           `Successfully changed the DJ role of this server to ${role.name}`
  //         );
  //       } else {
  //         /**
  //          * @type {require("discord.js").Role}
  //          */
  //         let role = interaction.guild.roles.cache.get(GuildDB.DJ);
  //         client.sendTime(
  //           interaction,
  //           `The DJ role of this server is ${role.name}`
  //         );
  //       }
  //     }
  //   },
  // },
};
