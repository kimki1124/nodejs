// fs 모듈 추출
var fs = require('fs');

// 파일에 쓸 데이터 생성
var data = 'Hello, World';

// 파일 쓰기. 파일을 다 쓰면 완료됐다는 로그를 출력
fs.writeFile('textfileWrite.txt', data, 'utf8', function(error){
  console.log('WRITE FILE ASYNC COMPLETE');
});
