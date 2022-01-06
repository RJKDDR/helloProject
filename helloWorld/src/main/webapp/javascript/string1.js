//string1.js
// var val ='hello';
// val = new String('hello,world');
// console.log(val.substring(2,3));

// var h3Tag = document.querySelector('h3');
// console.log(h3Tag.innerHTML);
// var text = h3Tag.innerHTML;
// var str = text.substring(2, 6);//2번째이후 6번째 제외해서 가지고 와서 llo, 임
// str = text.slice(1,5);
// str = val.substring(0,2);
// var elem = document.getElementById('show');
// // elem.innerHTML = '<h3>Hello</h3>';
// elem.innerText = str;
// console.log(elem);

const person = {
    fullName: 'Min',
    age: 10,
    toString: function () {
        return this.fullName + ', ' + this.age;
    }
}

person.fullName = 'Jung';
person.toString();

const str = 'Jung';
str.length;
let newStr = str.substring(1, 5);
newStr = str.slice(-3, -1);

newStr = str.replace('g', ',').replace(',', '.'); //철자 바꾸는 방법뒤에 아무것도 안넣으면 삭제됨
console.log(newStr);

//주민번호 :  000101-3123456,000101-4123456,
//            940912-1234567,930309 1234567,9212041234567
//남자 여자 구별하는 function
function getGender(jm) {
    if (jm.length != 13 && jm.length != 14) {
        return; //함수종료
    }
    //7번째 위치치에 따라 1,3:남자,2,4:여자    
    let genNum = jm.replace('-', ' ').replace('', '').substring(7, 8);
    genNum = jm.slice(-7, -6); //-는 뒤에서부터 순서됨
    let gender = '남자'

    if (genNum == '1' || genNum == '3') {
        gender = '남자';
    } else if (genNum == '2' || genNum == '4') {
        gender = '여자';
    } else {
        gender = 'None';
    }
    return gender;
}
console.log(getGender('000101-3123456'));
console.log(getGender('000101 4123456'));
console.log(getGender('0001013123456'));
console.log(getGender('000101123456789'));

console.log('hello'.toUpperCase().toLowerCase());

let str1 = 'hello';
str2 = 'world';
console.log(str1.concat(' ', str2, '~!'));

let str3 = str1.concat(' ', str2, '!!');
console.log(str3);

let pos = str3.charAt(2);
console.log(pos);
//hello world!!
let ary = str3.split(''); //띄어쓰기가 들어가면 띄어쓰기 기준으로 나눠지고 ''만 들어가면 1개씩 다 나눠짐
for (let str of ary) {
    console.log(str);
}
//단어갯수 확인하기
let temp = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque dolore perferendis blanditiis quis quia iure? Deserunt doloremque saepe vero enim voluptate molestiae aliquam, dicta inventore maxime et ea ducimus.';
let tempAry = temp.split(' ');
console.log(tempAry.length);

let fruits = 'Apple Banana Cherry Melon';
let fruit = prompt('과일입력 : ');

function getLoc(fruit) {
    if(!fruit){
        return;
    }
    let temp = fruits.split(' ');
    console.log(temp);
    let cnt = 0;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].toUpperCase() == fruit.toUpperCase()) {
            cnt = i + 1;
        }
    }
    if(cnt == 0){
        return '만족하는 값이 없습니다.';
    }
    return cnt + '번째';
}
console.log(getLoc(fruit));