const http = require("http"); // require: 모듈을 읽어오는 함수, http 모듈을 불러와서 htrtp 변수에 할당 
let count = 0;

const server = http.createServer((req, res) => { // createServer(콜백학수) => 콜백 함수에서는 http 서버로 들어온 요청을 처리할 함수를 설정한다. 
    log(count);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("hello\n"); // 응답으로 즉시 출력됨. 
    setTimeout(() => { // 이벤트 루프를 통해 비동기로 처리된다. 
        res.end("Node.js");
    }, 2000); // 2초 후 Node.js 출력
});

function log(count) {
    console.log((count += 1));
}

server.listen(8000, () => console.log("Hello Node.js")); // 8000번 포트로 서버 실행, 실행되면 Hello Node.js 출력 