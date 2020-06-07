// require é uma função
const express = require("express")
// executa a função
const server = express()

// configurar caminhos da minha aplicação
// página inicial
// req: Requisição (Pedido)
// res: Resposta
server.get("/ ",  (req, res) => {
    res.send("Hello World!")
}) 

// ligar o servidor - listen: ouvir
server.listen(3000)
