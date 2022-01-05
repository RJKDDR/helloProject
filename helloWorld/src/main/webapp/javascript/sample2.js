//sample2.js

var today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());

var otherDay= new Date(2021, 5, 0);
console.log(otherDay)
console.log(otherDay.getFullYear());
console.log(otherDay.getMonth());
console.log(otherDay.getDate());
console.log(otherDay.getDay());

var year = 2022;
var month = 3;
var today = new Date(year,month-1, 1);
var lastDay=new Date(2022, 1, 0);
//교수님 버전
var firstDayOfMonth=today.getDay();
var lastDateOfMonth=lastDay.getDate();
var days=['Sun', 'Mon','Tue','Wen','Tur','Fri','Sat'];

document.write(`<h3> ${today.getFullYear()}년 ${today.getMonth()+1}월</h3>`);//공통

//배열을 활용해서 요일정보 출력
for(var day of days){
    document.write('<span>' + day + '</span>');
}
document.write('<br>');

// var lastDay=new Date(2022, 0, 0);
// document.write(lastDay.getDate());
// document.write(today.getDay)//지정한 날짜의 요일(getDay)
// document.write('<span>일</span>');
// document.write('<span>월</span>');
// document.write('<span>화</span>');
// document.write('<span>수</span>');
// document.write('<span>목</span>');
// document.write('<span>금</span>');
// document.write('<span>토</span>');
// document.write('<br>');
//빈공란 출력
// for(var n = 0; n <today.getDay(); n++){
//     document.write('<span></span>');//띄어쓰기도 값으로봄!!!
// }
//(교수님 버전)
for(var n = 0; n <firstDayOfMonth; n++){
    document.write('<span></span>');//띄어쓰기도 값으로봄!!!
}
//날짜출력

// for(var i=1; i<=lastDay.getDate(); i++){
//     document.write('<span>'+ i +'</span>')
    
//     if((i+today.getDay()) % 7==0){        
//         document.write('<br>');
//     }
    
// }
//교수님 버전
for(var i=1; i<=lastDateOfMonth; i++){
    document.write('<span>'+ i +'</span>')
    
    if((i+firstDayOfMonth) % 7==0){        
        document.write('<br>');
    }
    
}