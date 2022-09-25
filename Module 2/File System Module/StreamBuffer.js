const http = require("http");

const url = require("url");

const fs = require("fs");

const readStream = fs.createReadStream("./data.txt");

readStream.on("data", (chunk) => {
  console.log("........................................................");
  console.log(chunk);
});

readStream.on("open", () => {
  console.log("stream is open");
});

setTimeout(() => {
  readStream.pause();
  console.log("stream is on pause now");
}, 10);

setTimeout(() => {
  readStream.resume();
  console.log("stream is on resume now");
}, 8000);
