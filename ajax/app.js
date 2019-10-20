let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencoded = bodyParser.urlencoded({extended: false});

app.use('/', express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/ajaxIndex.html')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Success')
})


//server
let port = 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
