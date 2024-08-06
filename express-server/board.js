const express = require("express");
const app = express();
let posts = []; // 게시글 리스트로 사용할 posts에 빈 리스트 할당
// 글 삭제시 삭제된 목록으로 재할당하기 때문에 let으로 지정함. 

// req.body를 사용하려면 JSON 미들웨어를 사용해야 한다.
// 사용하지 않으면 undefined로 반환
app.use(express.json()); // JSON 미들웨어 활성화

// 컨텐트 타입이 application/x-www-form-urlencoded인 경우 파싱 => 주로 POST 요청일 때의 컨텐트 타입이다. 
app.use(express.urlencoded({ extended: true })); // JSON 미들웨어 사용할 때 사용하는 함수, 이 함수 실행 안하면 req.body값이 undefined로 나온다. 
// express 미들웨어는 요청과 응답 사이에 로직을 추가할 수 있는 함수를 제공한다. 
// 즉, 요청 들어오고 나갈 때 전후 처리를 지원한다.
// 예를 들어, HTTP 요청 시마다 로그를 남기고 싶을 때, API에 로그를 남기는 코드를 추가하는 대신 미들웨어를 추가하면 된다. 

// 모든 응답에 charset=utf-8 헤더를 설정하는 미들웨어 추가
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    next();
});

app.get("/", (req, res) => { // /로 요청 들어오면 콜백 함수 실행 
    res.json(posts); // 게시글 리스트를 JSON 형식으로 보여줌. 
});

app.post("/posts", (req, res) => { // /posts로 요청 오면 콜백 함수 실행 
    const { title, name, text } = req.body; // HTTP 요청의 body 데이터를 변수에 할당  

    // 게시글 리스트에 새로운 게시글 정보를 추가 
    posts.push({ id: posts.length + 1, title, name, text, createdDt: Date()});
    res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
    const id = req.params.id; // app.delete에 설정한 path 정보에서 id값을 가져온다. 
    const filteredPosts = posts.filter((post) => post.id !== +id); // 글 삭제 로직, id 값과 일치하지 않는 게시글만 필터링 
    const isLengthChanged = posts.length !== filteredPosts.length; // 삭제 확인 
    posts = filteredPosts; // posts를 필터링된 게시글로 업데이트 
    if(isLengthChanged) { // posts의 데이터 개수가 변경되었으면 삭제 성공 
        res.json("OK");
        return;
    } 
    res.json("NOT CHANGED"); // 변경되지 않음 
});

app.listen(3000, () => {
    console.log("Welcome posts START!");
})