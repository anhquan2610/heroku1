const { appendFile } = require("fs")
const http = require("http")
const port = process.env.PORT || 3000
const app = http.createServer((req, res) =>{
res.end("<h1> Hello  Worrld </h1>")
res.write("<h3> My Nodejs web page has been deloyed to Heroku successfully!!! </h3> ")
res.end()
})

app.listen(port)