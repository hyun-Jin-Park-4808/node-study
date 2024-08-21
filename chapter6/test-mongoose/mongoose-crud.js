const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./person-model")

mongoose.set("strictQuery", false); // 설정해줘야 await Person.find({})에서 모든 값을 불러올 때 에러가 발생하지 않는다.

const app = express();
app.use(bodyParser.json()); // HTTP에서 Body를 파싱하기 위한 설정
app.listen(3000, async() => {
    console.log("Server started");
    const mongodbUri = "mongodb+srv://guswlsdl4808:1234@cluster0.wc7ab.mongodb.net/test?retryWrites=true&w=majority";

    mongoose
        .connect(mongodbUri)
        .then(console.log("Connectes to MongoDB")); // 몽고디비 커넥션 맺기
});

// 모든 person 데이터 출력
app.get("/person", async(req, res) => {
    const person = await Person.find({});
    res.send(person);
});

// 특정 이메일로 person 찾기
app.get("/person/:email", async (req, res) => {
    const person = await Person.findOne({email: req.params.email});
    res.send(person);
})

// person 데이터 추가하기
app.post("/person", async(req, res) => {
    const person = new Person(req.body);
    await person.save();
    res.send(person);
});

// person 데이터 수정하기
app.put("/person/:email", async(req, res) => {
    const person = await Person.findOneAndUpdate(
        {email: req.params.email},
        {$set: req.body},
        {new: true}
    );
    console.log(person);
    res.send(person);
});

// person 데이터 삭제하기
app.delete("/person/:email", async(req, res) => {
    await Person.deleteMany({email: req.params.email});
    res.send({success: true});
});

