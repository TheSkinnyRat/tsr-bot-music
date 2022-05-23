const { MessageEmbed, MessageReaction } = require("discord.js");
const fs = require("fs");
const path = require("path");

module.exports = {
  name: "changelog",
  description: "Show updates changelog",
  usage: "<all>",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["chlog", "updates", "update"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    if (args[0]) {
      if (args[0] == "all") {
        try {
          const changeLogData = fs.readFileSync(
            path.join(__dirname, "..", "changelog.md")
          );
          return message.channel.send({
            files: [
              {
                attachment: changeLogData || "No changelog found",
                name: "changelog.txt",
              },
            ],
          });
        } catch (e) {
          let ChangelogEmbed = new MessageEmbed()
            .setColor("RED")
            .setDescription("Error when load changelog file");
          return message.channel.send(ChangelogEmbed);
        }
      }
      let ChangelogEmbed = new MessageEmbed()
        .setColor(client.botconfig.EmbedColor)
        .setDescription(`Cannot find option for \`${args[0]}\`.`)
        .setFooter(
          `Type \`${
            GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
          }help changelog\` to see all options.`
        );
      return message.channel.send(ChangelogEmbed);
    }

    try {
      const changeLogData = fs.readFileSync(
        path.join(__dirname, "..", "changelog.txt"),
        "utf8"
      );
      let ChangelogEmbed = new MessageEmbed()
        .setColor(client.botconfig.EmbedColor)
        .setDescription(changeLogData || "No changelog found")
        .setFooter(
          `Type \`${
            GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
          }changelog all\` to see all changelog version.`
        );
      message.channel.send(ChangelogEmbed);
    } catch (err) {
      let ChangelogEmbed = new MessageEmbed()
        .setColor("RED")
        .setDescription("Error when load changelog file");
      message.channel.send(ChangelogEmbed);
    }
  },
};
