let express = require('express'),
app = express(),
bodyParser = require('body-parser'),
urlencoded = bodyParser.urlencoded({extended: true});

// Middleware
app.use(urlencoded);
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
  // res.send('It works')
})



// Server
let port = process.env.port || 3000;
app.listen(port, (err) => {
  if(err){
    throw error
  }

  console.log(`Listening to port ${port}`)
})
