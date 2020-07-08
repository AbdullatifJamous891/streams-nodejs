var http = require("http");
var fs = require("fs");


var server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-type': 'text/plain'});

    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');

    // we can use pipe method only with readable stream
    myReadStream.pipe(res)
})

server.listen(3000, '127.0.0.1');
console.log('now listining to port 3000...')