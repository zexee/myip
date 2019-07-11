const http = require('http')
const port = 8080

const requestHandler = (request, response) => {
  let chunks = []
  request.on('data', (chunk) => {
    chucks.push(data)
  })
  request.on('end', () => {
    const { method, url, headers } = request
    console.log('SourceIP:', request.connection.remoteAddress)
    console.log('Method:', method)
    console.log('url:', url)
    console.log('headers:', headers)
    var body = Buffer.concat(chunks).toString()
    console.log('Body:', body);
    msg = '' + request.connection.remoteAddress
    response.writeHead(200, {
      'Content-Length': msg.length,
      'Content-Type': 'text/plain'});
    response.end(msg);
  })
}

const server = http.createServer(requestHandler)

server.listen(port, '0.0.0.0', (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
