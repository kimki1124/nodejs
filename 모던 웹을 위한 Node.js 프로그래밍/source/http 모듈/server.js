var server = require('http').createServer();

// 52273 포트로 서버 기동
server.listen(52273, function(){
  console.log('Server running at http://127.0.0.1:52273');
});

var test = function(){
  server.close();
}

// 10초 후 서버를 종료함
setTimeout(test, 10000);
