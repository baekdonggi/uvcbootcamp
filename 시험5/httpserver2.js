//3000, 3001번 포트를 사용하는 웹서버 2개를 동시에 실행해보세요
const http = require('http')

http.createServer((request, response)=>{
  response.writeHead(200, {'content-Type': 'text/html; charset=utf-8'})
  response.write('<h1>헬로우 노드!!</h1>')
  response.end('<p>헬로우 백동기!</p>')
 }) 

.listen(3000,()=>{
 console.log('3000포트에서 대기중 ')
})

http.createServer((request, response)=>{
  response.writeHead(200, {'content-Type': 'text/html; charset=utf-8'})
  response.write('<h1>헬로우 노드!!</h1>')
  response.end('<p>헬로우 백동기!</p>')
 }) 
 
.listen(3001,()=>{
  console.log('3001 포트에서 서버대기중 ')
})
