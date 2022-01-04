//control.js

var num = prompt('점수를 입력하세요 :');
var grade = 'F';
if(num>=95){
    grade ='A+';
}else
if (num >= 90) {
    grade = 'A'; //90~94 : A 95~:A+
} else
if(num >=85){
    grade = 'B+';
}else
if (num >= 80) { //80~84:B,85~89:B+
    grade = 'B';
} else
if(num >=75){
    grade = 'C+';
}else
if (num >= 70) { //70~74:C 
    grade = 'C';
}else if(num >=65){
    grade = 'D+';
} else if (num >= 60) {
    grade = 'D';
}
// num = parseInt(num/10); //95/10=9.5
// switch (num) {
//     case 9:
//         grade = 'A';
//         break;
//     case 8:
//         grade = 'B';
//         break;
//     case 7:
//         grade = 'C';
//         break;
//     case 6:
//         grade = 'D';
//         break;
//     default:
//         grade = 'F';
//         break;

// }

document.write(`점수는 : ${num} 이고 등급은 ${grade} 입니다.`);