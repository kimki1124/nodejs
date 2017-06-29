# 1. Node.js 개요

## Node.js란
서버 환경에서 작동하는 자바스크립트.

## 기존 웹 서버와 Node.js의 차이
기존 웹 서버 - 스레드 기반 동기 방식으로 네트워크 I/O 처리
Node.js - 이벤트 기반 비동기 방식으로 네트워크 I/O 처리

## 싱글 스레드
Nodejs는 싱글 스레드로 일을 처리한다. 스레드를 하나만 생성하므로 메모리 등의 시스템 리소스를 많이 사용하지 않는다. 대신 그 하나의 스레드가 죽는 순간 서버 자체가 뻗어버린다.

# 2. Nodejs 개발환경 구축

## Nodejs 설치(Window 64비트, v6.11.0 LTS 기준)

##### LTS 버전과 Current 버전의 차이

LTS 버전 - Long Time Support의 약자로 안정화 상태의 버전이다. 30개월동안 지원을 받을 수 있다.

Current 버전 - 가장 최신의 버전. LTS 버전을 보완한 버전이지만 최신 버전이므로 불안정하고 숨겨져있는 버그가 많다.

홈페이지(http://nodejs.org) 접속해서 LTS 버전을 다운로드

![1](http://i.imgur.com/WtW5icH.jpg)

다운로드 받은 프로그램을 실행하면 아래와 같은 창이 뜬다. Next 클릭

![2](http://i.imgur.com/gGFS3Ts.jpg)

동의 후 Next 클릭

![3](http://i.imgur.com/Hoal5e2.jpg)

Node.js 설치 경로 선택 후 Next 클릭

![4](http://i.imgur.com/7BkPpX8.jpg)

환경변수 추가, npm 모듈 등을 설치할 것인지 옵션을 선택하는 화면이다. 모두 설치하는 것을 추천한다.

![5](http://i.imgur.com/o72tM4J.jpg)

Install 버튼 클릭하면 설치 완료

![6](http://i.imgur.com/vJaf4eE.jpg)

## Node.js 실행

cmd 창을 열고 node 명령어 입력 후 엔터 키를 누르면 REPL로 들어갈 수 있다.
REPL은 (Read Eval Print Loop)의 약자로 한 줄씩 코드를 입력해서 실행해볼 수 있는 공간이다.

![7](http://i.imgur.com/ifySvRp.jpg)

console.log('Hello, World'); 를 치고 엔터 키를 누르면 다음 줄에 바로 결과가 나온다

![8](http://i.imgur.com/hxrcqSt.jpg)

위 그림처럼 정상적으로 문자열을 출력했다면 Node.js가 잘 설치된 것이다. REPL을 빠져나오는 방법은 Ctrl + C 키를 두 번 누르거나 exit 명령어를 입력하고 엔터 키를 누르면 된다.

![9](http://i.imgur.com/HE7ajms.jpg)

## Node.js파일 작성 및 실행

확장자인 js파일을 만든다.(여기서는 파일명을 node.basic.js로 한다)

![10](http://i.imgur.com/0oYwfAl.jpg)

node.basic.js 파일을 에디터로 열고 console.log('Hello, World'); 를 입력하고 저장한다.
~~~javascript
console.log('Hello, World');
~~~
node.basic.js 파일이 있는 폴더에서 cmd 창을 열고 node node.basic.js 명령어를 입력하면 node.basic.js 파일에 있는 소스코드를 읽어서 결과를 cmd창에 출력한다

![11](http://i.imgur.com/pFavfUL.jpg)

## 간단한 웹 서버 작성 및 실행

node.server.js 파일을 하나 만들고 다음의 소스코드를 작성한다
~~~javascript
//모듈을 추출한다
var http = require('http');

//웹 서버를 만들고 실행
http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/html'});
  response.end('<h1>Hello World...!</h1>');
}).listen(52273, function(){
  console.log('Server running at http://127.0.0.1:52273/');
});
~~~
cmd창에서 node node.server.js 명령어를 입력해서 js파일을 실행한다

![12](http://i.imgur.com/99VFI1b.jpg)

웹 서버를 만들었으므로 프로그램이 종료되지 않는다. 웹 브라우저를 켜고 http://127.0.0.1:52273 주소로 접속해보자.

![13](http://i.imgur.com/BDadtp6.jpg)

위와 같은 화면이 뜨면 정상적으로 웹 서버가 기동된 것이다
