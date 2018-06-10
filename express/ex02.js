const express = require('express');
const server = express()
const porta = 3000

server.get('/', function(req, res, next) {
  console.log('Início...');
  next()
  console.log('Fim...');
})

server.get('/', function(req,res){
  console.log('Resposta...');
  res.send('<h1>Olá Express</h1>')
})

server.listen(porta, () => console.log('Execuntado na porta ' + porta))
