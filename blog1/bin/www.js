let http = require('http')
let serverHandle = require('../src/app')

const PORT = 3000
let server = http.createServer(serverHandle)
server.listen(PORT)
console.log('OK')