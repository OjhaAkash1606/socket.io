// const { lchown } = require("fs");
const http = require("http");
const ws = require("ws");

const server = http.createServer((req, res) => {
  
  res.end("Server has connected");
}).listen(3008);

const wss = new ws.Server({ server });
wss.on("headers", (msg,req) => {
  // console.log(msg);
  // console.log(req);
});

 wss.on("connection", (webs,req) => {
   webs.send("Hello i am ready to work!");
  //  console.log(webs)
   webs.on("message", (msg) => { console.log(msg)})
})


