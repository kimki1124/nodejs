var http = require('http');

http.createServer(function(request, response){
  if(request.method == 'GET'){
    console.log('GET 요청입니다');
  }else if(request.method == 'POST'){
    console.log('POST 요청입니다');
  }
}).listen(52273, function(){
  console.log('Server Running');
});
