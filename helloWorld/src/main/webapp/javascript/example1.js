//example1.js

const students = [{
    fullName: '김남준',
    studNo: '1001',
    score: 80
}, {
    fullName: '김석진',
    studNo: '1002',
    score: 85
}, {
    fullName: '민윤기',
    studNo: '1003',
    score: 83
}];
students.push({
    fullName: '정호석',
    studNo: '1004',
    score: 88
});
students.unshift({
    fullName: '전정국',
    studNo: '1005',
    score: 75
});

let str = '';
str += '<ul>';
for (let student of students) {
    str += `<li>${student.studNo}-${student.fullName}-${student.score}</li>`
}
str += '</ul>';
document.write(str);

students.pop();
students.shift();
document.write('<ul>');
students.forEach(liFnc); //callback function
document.write('</ul>');

function liFnc(item) {
    document.write(`<li>${item.studNo} - ${item.fullName} - ${item.score}</li>`);
}

const numAry = [1, 2, 3];
// numAry[3] =4;
// numAry[numAry.length] = 10;//값 추가
// console.log(numAry)

numAry.push(4);
numAry.push(10); //수를 추가하는데 맨뒤에넣은때
numAry.unshift(40); //수를 추가할때 맨 앞에 넣을때 사용
console.log(numAry)