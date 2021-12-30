// 3000번 포트인 웹서버 하나를 만들어보세요!
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.end("<h1>3000번 포트인 웹서버 만들기</h1>");
  })
  .listen(3000, () => {
    console.log("3000번으로 실행");
  });
