//function1.js

function addNumber(n1, n2){
    var sum = n1+n2;
    console.log(`합계는 ${sum}`);
}
addNumber(5,10);//함수호출.

function showNumber(yourName, yourScore){
    document.write(`<p>이름 : ${yourName}, 점수 : ${yourScore}</p>`);
}
var yourName ='정호석';
var yourScore = 88;

showNumber(yourName, yourScore);

function showInfo(yourName,birthYear){
    var today = new Date();
    var thisYear = today.getFullYear();//연도정보
    var age = thisYear - birthYear;
    document.write(`<p>${yourName}의 나이는 ${age}입니다</p>`);
}

var students = [{
    studentName:'민윤기',
    score:80,
    birth:1993
},{
    studentName:'김석진',
    score:75,
    birth:1992
},{
    studentName:'김남준',
    score:95,
    birth:1994

}];

for(var student of  students){
    showNumber(student.studentName, student.score);
}
for(var student of  students){
   showInfo(student.studentName, student.birth);
}