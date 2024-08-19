const DB = [];

function saveDB(user) {
    const oldDBsize = DB.length + 1;
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve, reject) => { // 콜백 대신 Promise 객체 반환 
        if(DB.length > oldDBsize) {
            resolve(user); // 성공 시 유저 정보 반환 
        } else {
            reject(new Error("Save DB Error!")); // 실패 시 에러 발생 
        }
    });
}

function sendEmail(user) {
    console.log(`email to ${user.email}`);
    return new Promise((resolve) => { // Promise 객체 반환, 실패 처리 없음
        resolve(user);
    });
}

function getResult(user) {
    return new Promise((resolve, reject) => { // Promise 객체 반환 
        resolve(`success register ${user.name}`); // 성공 시 성공 메시지와 유저명 반환 
    });
}

function registerByPromise(user) {
    // 비동기 호출이지만, 순서를 지켜 실행
    const result = saveDB(user)
                    .then(sendEmail)
                    .then(getResult)
                    .catch(error => new Error(error)) // error 처리 
                    .finally(() => console.log("완료!")); // 성공, 실패 여부 관계없이 실행 후 에러 처리됨! 
    console.log(result); 
    return result;
}

const myUser = {email: "andy@test.com", password: "1234", name: "andy"};
const result = registerByPromise(myUser);
// 결과값이 Promise이므로 then() 메서드에 함수를 넣어 결과값을 볼 수 있다.
result.then(console.log); // 여기서 에러 발생! 

// allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
// allResult.then(console.log);