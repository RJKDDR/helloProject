//basic.js

// 자바스크립트의 주석구문 입니다
'use strict' //에러를 (변수타입같은걸) 찾아줌(젤 첮번째에 넣어주면 좋음)
var v1; //undefined
var myname="Min"
v1="hello,world";
v1='nice, world';
v1='nice,"world"';
v1='nice,'+ myname;
v1=`nice, ${myname}`;
//'나 " 딱히 구분해서 사용하지않음 뭘 써도 상관 무

v1=100;

v1=3.14;

var v2 = 10;

var result = v1+v2;

var trueOrFalse = true;
trueOrFalse = false;
trueOrFalse = 10 < 20;
trueOrFalse = 10; //0,null,undefined,''
trueOrFalse = null;
if(trueOrFalse){
    console.log('참값입니다.');
}else{
    console.log('거짓이거나 값이 없습니다.');
}

console.log(result);
console.log(typeof result);

var str = '<ul>';
str +='<li>Apple</li>';
str +='<li>Banana</li>';
str +='<li>Cherry</li>';

str +='</ul>';
document.write(str);

//var 변수선언;
var num1 =10;
// num3 = 30;
console.log('global : ' + num1);
// console.log('global : ' + num3);

function f1(){ //function은 그 범위 내에서만사용한다는 뜻
    var num1 = 20;
    // num3 = 40;
    console.log('local : ' + num1);
}
f1();

console.log('global : ' + num1);
// console.log('global : ' + num3);


