function myWork(work) {
    return new Promise((resolve, reject) => {
        if(work === 'done') {
            resolve('game possible');
        } else {
            reject(new Error("game impossible"));
        }
    })
}

// 콜백과 다를 바 없음.
myWork('done').then(function(value) {console.log(value)},
function(err) {console.log(err)});

// 좋음
myWork('doing')
    .then(function (value) {console.log(value)})
    .catch(function (err) {console.error(err)});
