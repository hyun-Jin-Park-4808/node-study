
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://guswlsdl4808:1234@cluster0.wc7ab.mongodb.net/myFirstDataBase?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri); // 몽고디비 클라이언트 객체 생성 

async function run() {
    await client.connect(); // 몽고 디비 접속 
    const adminDB = client.db('test').admin(); // admin() 함수를 통해 admin db 인스턴스 가져온다.
    const listDatabases = await adminDB.listDatabases(); // admin DB인스턴스의 listDatabases() 함수를 통해 디비 정보를 반환한다. 
    console.log(listDatabases); // 디폴트 디비로 admin, local이 있다. 
  }

run()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close()); // 마지막에 커넥션 닫기. 
