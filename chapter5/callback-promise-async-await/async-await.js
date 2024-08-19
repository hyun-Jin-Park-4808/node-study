async function myName() {
    return "Andy";
}

console.log(myName()); // Promise { 'Andy' }

async function showName() {
    const name = await myName(); // myName() 함수 실행이 끝나길 기다린다. 
    console.log(name); 
}

console.log(showName()); // 결과: Promise { <pending> }
// Andy => await의 결과로 console.log(name)에 의해 찍힘.  

function waitOneSecond(msg) { // 1초 대기하고 메시지 출력 
    return new Promise((resolve, _) => { 
        // setTimeout()에는 반환값이 없기 때문에 직접 Promise를 생성, 직접 생성해 반환하므로 async 붙여주지 않아도 된다. 
        // reject는 사용하지 않기 때문에 _로 사용하지 않음을 표시한다. 
        setTimeout(() => resolve(`${msg}`), 1000);
    });
}

async function countOneToTen() { // 10초 동안 1초마다 메시지 출력 
    for(let x of [...Array(10).keys()]) { // 0~9까지 루프 순회, ...Array(10).keys() = [0, 1, 2, ..., 9] 
        let result = await waitOneSecond(`${x + 1}초 대기 중...`); // await 뒤에는 waitOneSecond() 함수를 주었다. 
        console.log(result);
    }
    console.log("완료");
}

countOneToTen();