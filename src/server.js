// require é uma função
const express = require("express")
// executa a função
const server = express()

// configuração da pasta publica,public server.use(),é uma função que configura o servidor
server.use(express.static("public"))


// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// configurar caminhos da minha aplicação
// página inicial
// req: Requisição (Pedido)
// res: Resposta
server.get("/",  (req, res) => {
    return res.render("index.html")
}) 

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})

// ligar o servidor - listen: ouvir
server.listen(3000)
