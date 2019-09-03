var http = require("http")
var url = require("url")
var path = require('path')
var fs = require("fs")
var mime = require('mime')
var querystring = require('querystring')

var server = http.createServer(function(request, response){
    var urlObj = url.parse(request.url, true)
    var pathname = urlObj.pathname
    var filePath = path.join(__dirname, "public", pathname)

    var ext = path.parse(pathname).ext
    var mimeType = mime.getType(ext)


    var query = urlObj.query

    switch(pathname){
        case '/index.html':
                console.log(444)
                fs.readFile(filePath, (err, data) => {
                    if(err) {
                        response.writeHead(404);
                        response.write("404 - File is not found!");
                        response.end()
                    }else{
                        response.writeHead(200, { "Content-Type" : mimeType } )
                        response.write(data)
                        response.end()
                    }
                   
                })
                break;
        case '/login/account':
            if(request.method == 'POST'){
                var post = ''
                request.on('data', function (chunk) {
                    post += chunk
                })

                request.on('end', function () {
                    
                    var queryObj = querystring.parse(post) //将查询字符串解析为对象
                    response.writeHead(200, { "Content-Type" : "text/plain" } )
                    response.write(JSON.stringify(queryObj))
                    response.end()
                })
            }else{
                response.writeHead(200, { "Content-Type" : mimeType } )
                response.write(JSON.stringify(query))
                response.end()
                break;
            }
                
    }


    

    // response.writeHead(200, {
    //     "Content-Type": "text/plain"
    // })

    // response.write("hello world")

    // response.end()
})

server.listen(8888, function () {
    console.log('正在监听端口 8888： ')
})