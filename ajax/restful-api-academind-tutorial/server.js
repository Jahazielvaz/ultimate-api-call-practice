// Server Setup

let http = require('http');
let app = require('./app');

let port = process.env.port || 3000;
let server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening to port ${port}`);
})
