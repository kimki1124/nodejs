var http = require('http');

http.createServer(function(request, response){
  var date = new Date();
  date.setDate(date.getDate() + 7);

  // 헤더에 쿠키 설정
  response.writeHead(200,{
    'Content-Type':'text/html',
    'Set-Cookie':[
      'breakfast = toast;Expires = ' + date.toUTCString(),
      'dinner = chicken'
    ]
  });

  // 응답 바디에 쿠키 값
  response.end('<h1>' + request.headers.cookie + '</h1>');
}).listen(52273, function(){
  console.log('Server Running');
});
