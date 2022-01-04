//basic2.js
'use strict'
var fruits = ['Apple', 'Banana', 'Cherry'];
var str = '';
// document.write('<ul>');
str += '<ul>';
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    // str += '<li>'+fruits[i]+'</li>';
    str += `<li>${fruits[i]}</li>`;
    // document.write('<li>'+fruits[i]+'</li>');
}
str += '</ul>';
// document.write('</ul>');
document.write(str);
//10+'20'=>1020
var numbers = [10, '20', 30, 40];
console.log(numbers.length);
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
    //Integer.parseInt('20')같은 string을 int로 강제타입 변환시킨것
}
console.log(`합계: ${sum}`);

var student1 = {
    name: 'Min',
    age: 30,
    score: 90
};
//for...in=> object 의 필드속성을 반복
for (var field in student1) {
    console.log(field, student1[field]);
}
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.score);=>이 3줄을 for..in..으로 깔끔하게 보여줌

var student2 = {
    name: 'Kim',
    age: 31,
    score: 80
}
var student3 = {
    name: 'Park',
    age: 27,
    score: 85
}

var students = [student1, student2, student3];
str = ''; //값 초기화
str += '<table border="1">';
str += '<thead><tr>';
for (var field in student1) {
    str += `<th>${field}</th>`;
}
str += '</tr></thead>';
str += '<tboby>';
for (var i = 0; i < students.length; i++) {
    var field = 'score';
    console.log(`${i+1}번째 name=> ${students[i].name}`);
    console.log(`${i+1}번째 age=>${students[i]['age']}`);
    console.log(`${i+1}번째 score=> ${students[i][field]}`);
    str += '<tr>';
    for (var field in student1) {
        str += `<td>${students[i][field]}</td>`;
    }
    str += '</tr>';
}
str += '</tboby></table>';
document.write(str);