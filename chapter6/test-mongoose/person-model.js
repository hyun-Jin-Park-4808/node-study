var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const personSchema = new Schema({ // 스키마 생성 
    name: String,
    age: Number,
    email: {type: String, required: true},
});

module.exports = mongoose.model('Person', personSchema); // 모델 객체 생성
// exports 했기 때문에 다른 파일에서 require() 함수로 불러올 수 있다. 