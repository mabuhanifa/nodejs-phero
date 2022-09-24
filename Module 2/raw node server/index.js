const http = require("http");

const url = require("url");

const obj = {
  name: "nodeJs",
  creator: "Ryan Dahl",
};
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     res.write("<p> Hello from the node</p>");
//     res.end();
//   } else if (req.url === "/home") {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     res.write(`
//     <p> Hello from the node</p>
//     <h1> Home</h1>
//     `);
//     res.end();
//   } else if (req.url === "/main") {
//     res.writeHead(200, {
//       "Content-Type": "application/json",
//     });
//     res.end(JSON.stringify(obj));
//   }
// });

const server = http.createServer((req, res) => {
  const address =
    "http://localhost:5000/contact?name=shourov&country=bangladesh";
  const parsedUrl = url.parse(address, true);
  const queryObject = parsedUrl.query;
  console.log(queryObject);
});

const PORT = 9000;

server.listen(PORT);

console.log(`server is running at ${PORT}`);
