const express = require("express"); // express 패키지 로딩해 변수 express에 할당하기
const app = express(); // express() 실행해 express 인스턴스 만들고 app에 할당하기
const port = 3000;
app.get("/", (req, res) => { // /로 get 요청이 오는 경우 
    res.set({ "Content-Type": "text/html; charset=utf-8"}); // 헤더값 설정 
    res.end("헬로 express");
});

app.listen(port, () => {
    console.log(`START SERVER : user ${port}`)
})