const { lchown } = require("fs");
const http = require("http");
const ws = require("ws");

const server = http.createServer((req, res) => {
  res.end("Server has connected");
});

const wss = new ws.Server({ server });
wss.on("headers", (head) => {
  console.log(head);
});

server.listen(3008);
