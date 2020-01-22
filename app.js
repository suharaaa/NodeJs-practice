const http = require('http');
const routes = require('./routes'); //cus its not a global module put './' 

const server = http.createServer(routes); //use as a handler, no para just execute it
// const server = http.createServer(routes.handler); //use as a handler, no para just execute it
    // console.log(req.url, req.method, req.headers );
    //process.exit();

server.listen(3000);