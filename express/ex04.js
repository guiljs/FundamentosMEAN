const express = require('express');
const server = express()
const porta = 3000

server.route('/client')
  .get((req, res) => res.send('Lista de Clientes'))
  .post((req, res) => res.send('Novo cliente'))
  .put((req, res) => res.send('Altera Cliente'))
  .delete((req, res) => res.send('Remove cliente'))

server.listen(porta, () => console.log('Execuntado na porta ' + porta))
