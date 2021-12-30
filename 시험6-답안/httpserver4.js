// Error 처리하는 웹서버를 하나 만들어보고
// 일부러 에러를 생성해보자!

const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
  try {
    throw new Error("에러 생성!");
    const data = await fs.readFile("./server3.html");
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/html;charset=utf-8" });
    res.end(err.message);
  }
});

server.listen(3000);

server.on("listening", () => {
  console.log("3000번으로 실행 중 !");
});
