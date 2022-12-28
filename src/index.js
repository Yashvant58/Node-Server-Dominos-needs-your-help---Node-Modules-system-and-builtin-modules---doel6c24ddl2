var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    if(req.url=="/"){
        res.end("Welcome to Dominos!")
    }else if(req.url=="/welcome"){
        res.writeHead(200,{"content-type":"text/plain"});
  res.end("Welcome to Dominos!")
    }else if(req.url=="/contact"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(`phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'`);
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("404");

    }

}
httpServer.listen(8081,"127.0.0.1", ()=>{
    console.log('listening to port no 8081');
});

module.exports = httpServer;