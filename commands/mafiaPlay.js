const {runningGames} = require('../bot.js')

module.exports = async msg => {
    const game = await runningGames[msg.guild]
    game.status = 'playing'
    console.log(game.players.size)
    for (const player of game.players)
    {
        console.log(player.username)
    }
    // in game.players, remove client.user and add game.host
    msg.channel.send("Setting up a good ol game of mafia, a true classic banger...")
    // ... 
    msg.channel.send('wow this game is super intense, so many cool things are happening')
    const winningTeam = 'everybody'
    msg.channel.send(`quality game, ${game.guild.name}. ${winningTeam} wins!`)
    delete runningGames[msg.guild]
}