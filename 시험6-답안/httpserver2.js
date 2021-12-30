//3000, 3001번 포트를 사용하는 웹서버 2개를 동시에 실행해보세요

const http = require("http");

const server1Port = 3000
const server1 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.write("<h1>Server-1</h1>");
  res.end(`<p>${server1Port}번 포트에서 동작합니다</p>`);
});

server1.listen(server1Port);
server1.on("listening", () => {
  console.log(`${server1Port}번 포트에서 서버 실행중`);
});
server1.on("error", (err) => {
  console.error(err);
});

const server2Port = 3001
const server2 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.write("<h1>Server-2</h1>");
  res.end(`<p>${server2Port}번 포트에서 동작합니다</p>`);
});

server2.listen(server2Port);
server2.on("listening", () => {
 console.log(`${server2Port}번 포트에서 서버 실행중`);
});
server2.on("error", (err) => {
  console.error(err);
});
