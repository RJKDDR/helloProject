//string1.js
var val ='hello';
val = new String('hello,world');
console.log(val.substring(2,3));

var h3Tag = document.querySelector('h3');
// console.log(h3Tag.innerHTML);
var text = h3Tag.innerHTML;
var str = text.substring(2, 6);//2번째이후 6번째 제외해서 가지고 와서 llo, 임
str = text.slice(1,5);
str = val.substring(0,2);
var elem = document.getElementById('show');
// elem.innerHTML = '<h3>Hello</h3>';
elem.innerText = str;
console.log(elem);