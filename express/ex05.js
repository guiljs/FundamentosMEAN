const express = require('express');
const server = express()
const porta = 3000

const router = require('./ex05_routes')

server.use('/api/', router)

server.listen(porta, () => console.log('Execuntado na porta ' + porta))
