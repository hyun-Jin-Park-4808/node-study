// 모듈을 require 함수로 포함시킬 때 실행된다. 
console.log("require로 부르면 실행된다."); // sample-package를 불러오는 시점에 실행된다. 

module.exports = { // 외부로 노출할 객체를 저장한다. module은 현재 모듈을 의미한다. 
    add: (a, b) => a + b, // 사칙연산을 하는 각 함수를 객체 타입으로 저장한다. 
    sub: (a, b) => a - b,
    multi: (a, b) => a * b,
    div: (a, b) => a / b
}
// sample-package에 설치한 프로젝트에서는 require('sample-package')로 module.exports 안에 있는 값을 가져올 수 있다. 