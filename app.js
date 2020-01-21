const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // console.log(req.url, req.method, req.headers );
    //process.exit();
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit" >Send</button></form></body>');
        res.write('</html>');
        return res.end(); //to not continue the code below and because its a if statement
    }

    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            //take parseBody element and split it by = sign
            //1 'cus element next to key=value pare (value is 1)
            fs.writeFileSync ('message.txt', message);

            //sending the response
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h1>hello from my app</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);