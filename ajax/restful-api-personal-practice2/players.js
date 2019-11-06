const express = require('express'),
router = express.Router();

const players = [
  {username: "puppykiller", ranking: 2342, guildname: "fairyTail"},
  {username: "deathqueenlena", ranking: 242, guildname: "wildstorm"},
  {username: "Nos", ranking: 231, guildname: "ESG"},
  {username: "ChangoFeliz", ranking: 18, guildname: "theKillers"},
  {username: "bradm", ranking: 23482, guildname: "ddd"},
]

router.get('/', (req, res, next) => {
  res.status(200).json({
    players: players
  })
})

module.exports = router;
