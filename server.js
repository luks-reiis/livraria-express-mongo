const http = require("http");
const port = 3000;

const rotas = {
  "/": "Curso de Node",
  "/livros": "Pagina de livros",
  "/autores": "Pagina de autores",
  "/editora": "Pagina da editora",
  "/sobre": "Info sobre projeto",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
