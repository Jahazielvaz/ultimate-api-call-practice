let express = require('express'),
app = express(),
bodyParser = require('body-parser'),
urlencoded = bodyParser.urlencoded({extended: true})

app.use('/', express.static(__dirname));
app.use(urlencoded)

app.get('/contact', (req,res) => {
  res.sendFile(__dirname + '/ajax2Index.html')
})

app.post('/contact', (req, res) => {
  console.log(req.body)
  res.send("Success!")
})



//Server
let port = 4000;
app.listen(port, () => {
  console.log(`listening to port ${port}`)
})
