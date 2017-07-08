var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function(request, response){
  fs.readFile('JadePage.jade', 'utf8', function(error, data){
    var fn = jade.compile(data);

    response.writeHead(200, {'Content-Type':'text/html'});
    response.end(fn({
      name:'RintIanTta',
      description:'Hello Jade with Node.js..!'
    }));
  });
}).listen(52273, function(){
  console.log('Server Running');
});
