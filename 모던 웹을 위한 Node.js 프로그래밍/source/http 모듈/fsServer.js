var fs = require('fs');
var server = require('http').createServer(function(request, response){
  fs.readFile('HTMLPage.html', function(error, data){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end(data);
  });
});

server.listen(52273, function(){
  console.log('Server Running');
});
