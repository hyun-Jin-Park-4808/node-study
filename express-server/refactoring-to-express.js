const url = require("url");
const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log("익스프레스로 라우터 리팩터링하기");
});

// GET 메서드의 라우팅 설정
app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res) {
    const user = url.parse(req.url, true).query;

    res.json(`[user] name : ${user.name}, age: ${user.age}`);
}

function feed(_, res) { 
    // 호이스팅 사용하기 위해 const 말고 function으로 사용, req는 사용하지 않는 변수이므로 _으로 표시 
    res.json(`<ul
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
        `);
}