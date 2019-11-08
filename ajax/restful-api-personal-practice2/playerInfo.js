const express = require('express');
const router = express.Router()



const players = [
  {id: 1, playername: "John Zapata", username: "puppykiller", ranking: 2342, guildname: "fairyTail", message: "I'm the greatest"},
  {id: 2, playername: "Jr", username: "deathqueenlena", ranking: 242, guildname: "wildstorm", message: "I'm Amazing"},
  {id: 3, playername: "Maddi Max", username: "Nos", ranking: 231, guildname: "ESG", message: "I'm the greatest"},
  {id: 4, playername: "Taylor ham", username: "ChangoFeliz", ranking: 18, guildname: "theKillers", message: "I hpe I do well"},
  {id: 5, playername: "Zee Vee", username: "bradm", ranking: 23482, guildname: "ddd", message: "Let's get this started"}
]

router.get('/', (req, res, next) => {
  res.status(200).json({
    data: players
  })
})

router.post('/', (req, res, next) => {
  const player = {
    id: req.body.id,
    playername: req.body.playername,
    username: req.body.username,
    ranking: req.body.ranking,
    guildname: req.body.guildname,
    message: req.body.message
  }

  res.status(201).json({
    message: `Congratulations! Player ${player} has been created`,
    player: player
  })
})

module.exports = router;
