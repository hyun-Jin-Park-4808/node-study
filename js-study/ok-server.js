const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end("OK"); // 응답 후 종료
});

server.listen("3000", () => console.log("OK 서버 시작!")); // 3000포트 사용, 접속 대기 
