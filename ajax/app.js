let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencoded = bodyParser.urlencoded({extended: false});

app.use('/', express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/ajaxIndex.html')
})


//server
let port = 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
