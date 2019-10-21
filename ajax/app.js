let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencoded = bodyParser.urlencoded({extended: false});

// let userOutput = document.getElementById('user-output');

app.use('/', express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/ajaxIndex.html')
})

app.post('/', urlencoded, (req, res) => {
  console.log(req.body)
  res.sendFile(__dirname + '/successPage.html')
})


//server
let port = 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
