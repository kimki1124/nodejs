// fs 모듈 추출
var fs = require('fs');

// 파일에 쓸 데이터 생성
var data = 'Hello, World';

// 파일 쓰기. 에러 발생 시 에러내용 출력. 에러가 없으면 정상 메시지 출력
fs.writeFile('notFound.txt', data, 'utf8', function(error){
  if(error){
    console.log(error);
  }else{
    console.log('FILE WRITE COMPLETE');
  }
});
