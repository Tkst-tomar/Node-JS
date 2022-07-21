const http = require("http");

http.createServer(
    console.log("Server Created")
    ,(req, res) => {
    // req.send()

    res.end("Hello World, this is Tarun Tomar")
}).listen(2000)
