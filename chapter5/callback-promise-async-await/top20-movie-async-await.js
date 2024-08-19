const axios = require("axios"); // axios 임포트

async function getTop20Movies() { // await를 사용하므로 async 붙임 
    const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json"; // 영화 순위 정보 URL
    try {
        const result = await axios.get(url); // 네트워크에서 데이터 받아오므로 await로 기다림. 
        const {data} = result; // 결과값(result)에는 data 속성이 포함되어 있음. 
        if(!data.articleList || data.articleList.size == 0) { // data 또는 articleList 없을 때 예외 처리 
            throw new Error("No data");
        }
        const movieInfos = data.articleList.map((article, idx) => {
            return {title: article.title, rank: idx + 1}; // 데이터에서 필요한 영화 제목과 순위 정보 뽑아냄. 
        });

        for(let movieInfo of movieInfos) { // 뽑아낸 영화 정보 돌면서 데이터 출력 
            console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
        }
    } catch(err) {
        throw new Error(err);
    }
}

getTop20Movies(); // await를 함수 안에서만 사용 가능하므로 함수를 하나 생성해 실행 