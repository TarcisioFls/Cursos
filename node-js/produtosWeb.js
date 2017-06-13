var http = require('http');

var server = http.createServer(function(request, response){
    if (request.url == "/produtos") {
        response.end("<html><body></body><h1>Listando produtos</h1></html>");
    } else {
        response.end("<html><body></body><h1>Home da casa do código</h1></html>");
    }
});

server.listen(3000, "localhost");

console.log("Servidor Rodando!");