const { MessageEmbed, MessageReaction } = require("discord.js");
const fs = require("fs");
const path = require("path");

module.exports = {
  name: "changelog",
  description: "Show updates changelog",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: [],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    try {
      const changeLogData = fs.readFileSync(
        path.join(__dirname, "..", "changelog.txt"),
        "utf8"
      );
      let ChangelogEmbed = new MessageEmbed()
        .setColor(client.botconfig.EmbedColor)
        .setDescription(changeLogData || "No changelog found");
      message.channel.send(ChangelogEmbed);
    } catch (err) {
      let ChangelogEmbed = new MessageEmbed()
        .setColor(client.botconfig.EmbedColor)
        .setDescription("Error when load changelog file");
      message.channel.send(ChangelogEmbed);
    }
  },
};
