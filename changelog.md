****1.0.5-20052022****

- Added dev commands to .gitignore
- Added lavalink configuration example to git repository
- Send error message when track error while playing
- Bot now can play restricted youtube video (re-config lavalink)
- Update "changelog" to display only current version and added option to display all versions
- New command [autoplay] to continuously add recommended tracks to the queue.

****1.0.4-09052022****

- Fix guild database to (force) save to root directory (working directory before and causing bug while use pm2 to run program)
- Change "now playing" message to display more compact
- Change "search" to display more compact
- Change "search" icon to requster icon (bot icon before)
- Change "search" to not display "added to queue" if queue = 1

****1.0.3-22042022****

- New command [changelog]
- Using embed for "play" -> search message
- Change "added to queue" icon to requster icon (bot icon before)
- Set "added to queue" to display only if queue > 1
- Change "now playing" icon to requster icon (bot icon before)
- Set to not send message when queue end
- Fix bug when using queue command after playing
- Set to not delete "now playing" message
- Bot now automatically disconnected if everybody left voice channel
- Presence bot now display current version
- Change "stats" -> ping logic from [Math.round(client.ws.ping)] -> [Date.now() - message.createdTimestamp]
- Re-config lavalink server (remove limitation by systemd)

****1.0.2-21042022****

- New command [avatar]
- Set lyrics to be displayed in full page
