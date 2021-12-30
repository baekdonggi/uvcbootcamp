// Error 처리하는 웹서버를 하나 만들어보고
// 일부러 에러를 생성해보자!
const http =require('http')
const fs = require('fs').promises

const server = http.createServer(async (req,res)=>{
  try{
    throw new Error('에러메시지: 표시할수 없는 화면입니다.')
  const data = await fs.readFile('./index.html')
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
  res.end(data)  
  } catch(err) {
    console.error(err)
    res.writeHead(500, {'Content-Type':'text/html; charset=utf-8'})
    res.end(`<p>${err.message}</p>`)
  }

})
server.listen(3000)

server.on('listening', ()=> {
console.log('서버 3000으로 실행하고 있음!')
})
