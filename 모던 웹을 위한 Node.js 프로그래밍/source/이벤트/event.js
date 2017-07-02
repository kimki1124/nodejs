process.on('exit', function(code){
  console.log('good bye');
});

process.on('uncaughtException', function(error){
  console.log('exception occur');
});

var count = 0;
var test = function(){
  count = count + 1;
  // count가 3보다 클 경우 exit 이벤트 발생
  if(count > 3){
    return;
  }

  // 다시 test function 실행
  setTimeout(test, 2000);
  // uncaughtException 이벤트 발생
  error.error.error();
};
// 2초마다 test function 실행
setTimeout(test, 2000);
