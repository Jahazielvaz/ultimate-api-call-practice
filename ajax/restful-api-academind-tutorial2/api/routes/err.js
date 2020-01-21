const err = (error) => {
  res.status(500).json({error: error})
}

module.exports = err;
