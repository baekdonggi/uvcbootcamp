// 3000번 포트인 웹서버 하나를 만들어보세요!
const http = require('http')

const server = http.createServer((request, response)=>{
  response.writeHead(200, {'content-Type': 'text/html; charset=utf-8'})
  response.write('<h1>헬로우 노드!!</h1>')
  response.end('<p>헬로우 백동기!</p>')
 }) 

 server.listen(3000)

 server.on('listening', ()=>{
   console.log('3000번 포트에서 실행하고 있음!')
 })

 server.on('error', (error)=> {
   console.error(error)
 })
