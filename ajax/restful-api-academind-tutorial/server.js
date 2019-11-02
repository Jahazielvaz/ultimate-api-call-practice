// EXPRESS SETUP
let express = require('express'),
app = express(),
bodyParser = require('body-parser'),
urlencoded = bodyParser.urlencoded({extended: false});

// Middleware
app.use(urlencoded);
app.use(express.static(__dirname));



// Server
let port = process.env.port || 3000;
app.listen(port, () => {

  console.log(`Now listening to port ${port}`);
})
