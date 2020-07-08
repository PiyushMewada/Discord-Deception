const { runningGames } = require('../bot')
module.exports = (client, messageReaction, user) => {
  // console.log(JSON.stringify(messageReaction.message, null, 2))
  if (messageReaction.message.guildID !== undefined) return
  if (messageReaction.emoji.name !== '✋') return
  if (user.bot) return
  for (const runningGame of Object.values(runningGames)) {
    if (runningGame.firstNight && runningGame.players.has(user)) {
      runningGame.readyCount += 1
      if (runningGame.readyCount === runningGame.players.size)
        runningGame.emit('startNight')
      return
    }
  }
}
