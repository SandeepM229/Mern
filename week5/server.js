const http = require('http')

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('End of res')
})

server.listen(3000)

console.log(`SERVER RUNNING ON ${"http://localhost:3000/"}`)
