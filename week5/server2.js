const http = require('http')

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write("data transfer using HTTP protocol\n")
    res.write("course: node.js\n")
    res.write("status: sucess")
    res.end()
})

server.listen(4000)

console.log(`SERVER RUNNING ON ${"http://localhost:4000/"}`)
