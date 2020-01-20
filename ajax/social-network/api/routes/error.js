const error = (err) => {
  res.status(500).json({error: err})
}

module.exports = error;
