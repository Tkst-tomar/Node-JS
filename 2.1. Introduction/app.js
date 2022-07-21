const http = require('http')
const PORT = 5000

const server = http.createServer((req, res) => {
    console.log("Request", req);
    // res.send({
    //     message:"Welcom to Node Js"
    // })
    // process.exit(1)
    res.setHeader('Content-Type', 'text/html')

    res.write("Hello World")
})

server.listen(PORT, ()=>{
    console.log(`Server Created on localhost:${PORT}`);
})