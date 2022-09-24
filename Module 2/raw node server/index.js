const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello world");
});

const PORT = 5000;

server.listen(PORT);

console.log(`server is running at ${PORT}`);
