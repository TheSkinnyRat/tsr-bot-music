const { Util, MessageEmbed } = require("discord.js");
const { TrackUtils, Player } = require("erela.js");

module.exports = {
  name: "autoplay",
  description: "Continuously add recommended tracks to the queue.",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["ap"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await message.client.Manager.get(message.guild.id);

    if (!player)
      return client.sendTime(
        message.channel,
        "❌ | **Nothing is playing right now...**"
      );
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **You must be in a voice channel to use this command!**"
      );
    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    )
      return client.sendTime(
        message.channel,
        ":x: | **You must be in the same voice channel as me to use this command!**"
      );

    const autoplay = player.get("autoplay");

    if (!autoplay || autoplay === false) {
      const identifier = player.queue.current.identifier;
      player.set("autoplay", true);
      player.set("requester", message.author);
      player.set("identifier", identifier);
      player.set("track", 1);
      const search = `https://www.youtube.com/watch?v=${identifier}&list=RD${identifier}`;
      res = await player.search(search, client.user);
      player.queue.add(res.tracks[1]);
      let thing = new MessageEmbed()
        .setColor(client.botconfig.EmbedColor)
        .setDescription(`Autoplay is now **enabled**`);
      return message.channel.send(thing);
    } else {
      player.set("autoplay", false);
      player.queue.clear();
      // player.queue.remove();
      let thing = new MessageEmbed()
        .setColor(client.botconfig.EmbedColor)
        .setDescription(`Autoplay is now **disabled**`);
      return message.channel.send(thing);
    }
  },
};
