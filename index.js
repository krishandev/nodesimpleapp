const http=require('http')
const fs=require('fs')
const PORT=4000;
const HOST="localhost";


const home=fs.readFileSync('./index.html')
const server=http.createServer((req, res)=>{
    if(req.url==='/about')
    {
       return res.end('<h1>About Us Page</h1>')
    }
    if(req.url==='/')
    {
       return res.end(home)
    }
    else{
      return  res.end('<h1>404 not found page</h1>')
    }
    
})

server.listen(PORT, HOST, ()=>{
    console.log(`Server is Running at ${PORT} Port on ${HOST}`)
})