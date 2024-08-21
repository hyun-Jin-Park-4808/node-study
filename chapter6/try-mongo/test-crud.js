const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://guswlsdl4808:1234@cluster0.wc7ab.mongodb.net/test?retryWrites=true&w=majority';

const client = new MongoClient(url); // MongoClient 생성

async function main() {
    try {
        await client.connect(); // 커넥션 생성하고 연결 시도 

        console.log('MongoDB 접속 성공');

        const collection = client.db('test').collection('person'); // test db의 person 컬렉션 가져오기 

        await collection.insertOne({name: 'Andy', age: 30}); // 문서 하나 추가 
        console.log('문서 추가 완료');

        const documents = await collection.find({name: 'Andy'}).toArray(); // 문서 찾기 
        console.log('찾은 문서:', documents);

        await collection.updateOne({name: 'Andy'}, {$set: {age: 31}}); // 문서 갱신하기 
        console.log('문서 업데이트');

        const updateDocuments = await collection.find({name: 'Andy'}).toArray(); // 갱신된 문서 확인하기 
        console.log('갱신된 문서 :', updateDocuments);

        // await collection.deleteOne({name: 'Andy'});
        // console.log('문서 삭제');

        // 연결 끊기
        await client.close();
    } catch(err) {
        console.log(err);
    }
}

main();