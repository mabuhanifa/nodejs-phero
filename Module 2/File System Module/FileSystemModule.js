const http = require("http");

const url = require("url");

const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    /*------------asynchronous file system--------------*/

    fs.readFile("data.txt", (err, data) => {
      if (err) {
        res.write("Failed to Read Data");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });

    /*------------asynchronous file system--------------*/

    /*------------synchronous file system--------------*/

    const data = fs.readFileSync("data.txt");
    res.write(data);
    res.end();

    /*------------synchronous file system--------------*/

    /*------------asynchronous file write --------------*/

    fs.writeFile("NewData.txt", "Hello Node JS!", (err) => {
      if (err) {
        res.write("data Failed to write");
        res.end();
      } else {
        res.write("data written successfully");
        res.end();
      }
    });
    /*------------asynchronous file write --------------*/
  }
});

const PORT = 9000;

server.listen(PORT);

console.log(`server is running at ${PORT}`);
