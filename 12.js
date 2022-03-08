const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('this is home')
    }
    if(req.url === '/about'){
        res.end('this is about')
    }
    res.end(`
    <h1>Ooops</h1>
    <p>page dosen't exist</p>
    <a href='/'>go home</a>
    `)
})

server.listen(5000)