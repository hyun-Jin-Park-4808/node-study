const http = require("http");
const url = require("url"); // url 모듈 로딩하고 url 변수에 할당 

http
    .createServer((req, res) => {
        const path = url.parse(req.url, true).pathname; // url 모듈 사용해 요청(req)으로 받은 url의 pathname을 얻는다. 
        // parse()함수의 두 번째 인수인 true는 쿼리 스트링도 함께 파싱할지 여부를 설정하는 변수이다. 
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        if(path in urlMap) { // in 연산자의 결과값: boolean 
            urlMap[path](req, res);
        } else {
            notFound(req, res);
        }
    })
    .listen("3000", () => console.log("라우터 만들기!"));

const user = (req, res) => { // 함수 표현식 통해 변수 user에 함수 할당 
    const userInfo = url.parse(req.url, true).query; // 쿼리 스트링 데이터를 userInfo에 할당 
    res.end(`[user] name : ${userInfo.name}, age: ${userInfo.age}`);
    // http://localhost:3000/user?name=hyunjin&age=29 이런식으로 입력하면 된다! 
};

const feed = (req, res) => {
    res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
        `);
};

const notFound = (res, req) => {
    res.statusCode = 404;
    res.end("404 page not found");
};

// 라우터 규칙 매핑 키로 path가 들어가고 값에 함수를 할당 
const urlMap = {
    "/": (req, res) => res.end("HOME"),
    "/user": user,
    "/feed": feed,
};
