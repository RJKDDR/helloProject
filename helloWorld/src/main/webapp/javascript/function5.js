//function5.js
var result = 100;
console.log(result);

function sum(first, last) {
    var result = first + last;
    console.log(result);
}
sum(10, 20);

var result = 200;
console.log(result);

// let result = 300;
let summay = 100;
console.log(summay);

function block1() {
    let summay = 200;
    console.log(summay);

    // let summay =300;
}
console.log(summay);

for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('----------')
// console.log(i);

let myName = 'Min';
myName = 'Kim';

// const pi=3.14; //한번 할당되고 나면 값을 바꿀수 없음 (상수(const)로 선언 )
// pi=3.1415;

const obj = { //obj 참조영역
    fullName: 'NamjunKim', //속성
    birth: '1995-09-12',
    score: 90,
    showInfo: function () { //function ()는 메소드
        return this.fullName + ', ' + this.age;
    },
    showAge: function () {
        let today = new Date();;
        let birth = new Date(this.birth);
        let age = today - birth;
        age = age / (1000 * 60 * 60 * 24 * 365);
        age = Math.floor(age);
        return age;
    }
}
console.log(obj.fullName);
obj.age = 30;
console.log(obj.age) //참조하고 있는거는 바꿀수있음!! 

console.log(obj.showInfo());
// document.write('hello');
console.log(obj.showAge()+'살');