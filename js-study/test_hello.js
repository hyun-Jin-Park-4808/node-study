import http from "k6/http";

export const options = { // 테스트 옵션 => 유저 100명이 10초 동안 계속 요청 보내는 설정 
    vus: 100, // 가상 유저설정 
    duration: "10s", // 테스트 진행 시간 설정 
};

export default function () {
    http.get("http://localhost:8000"); // 테스트에 사용할 함수 지정, http 프로토콜의 get 메서드 사용해서 "http://localhost:8000" 주소로 요청 보내겠다. 
}