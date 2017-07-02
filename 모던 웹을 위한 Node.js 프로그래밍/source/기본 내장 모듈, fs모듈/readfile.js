// fs 모듈 추출
var fs = require('fs');

// 파일을 비동기적으로 읽고 파일의 내용 출력
fs.readFile('textfile.txt', 'utf8', function(error, data){
  console.log(data);
});
