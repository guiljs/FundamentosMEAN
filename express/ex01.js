const express = require('express');
const server = express()

server.get('/', function(req, res) {
  res.send('<h1>Index!</h1>')
})

const porta = 3000

server.all('/teste', function(req, res) {
  res.send('<h1>Teste!</h1>')
})

server.get(/api/, function(req, res) {
  res.send('<h1>API</api>')
})

server.listen(porta, () => console.log('Execuntado na porta ' + porta))
