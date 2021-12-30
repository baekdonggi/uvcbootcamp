//fs promises 모듈을 사용해서 html 파일을 읽어서 띄우는 웹서버를 하나 만들어보세요

const http = require("http");
const fs = require("fs").promises;

server = http
  .createServer(async (req, res) => {
    try {
      const html = await fs.readFile("./index.html");
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.end(html);
    } catch (err) {
      res.writeHead(400, { "Content-Type": "text/plain;charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(3000, () => {
    console.log("3000번 포트에서 실행중!");
  });
