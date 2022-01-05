//UI 테스트 : 화~ 월(자바스크립트)
//function6.js
// function sum(a, b) {
// return a+b;
// }
let sum = function(first, last) {
    return first + last;
}
let anotherSum = sum;
console.log(sum(10,20));
console.log(anotherSum(30,40));

//Arrow Function(화살표 함수)
let getMinVal = (first, last) => {
    return first > last ? last : first;
    // if(fist>last){
    //     result=last;
    // }else{
    //     result=fist;
    // }
    // var result = fist>last ? last:fist;
    // return result;
}

console.log(getMinVal(10,5));