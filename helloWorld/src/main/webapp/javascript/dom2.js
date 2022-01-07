//dom2.js

// document Object model
// Element(element node, attribute node, text node), tag // element는 HTML 태그
//<img src='sample.jpg'>,<input type='text' value='sample'>
let img = document.createElement('img'); //img 태그를 만든것
img.setAttribute('src', '../imgs/sky3.PNG');
img.setAttribute('id', 'mypicture');
img.setAttribute('width', '200px');

document.getElementById('show').appendChild(img);
console.log(img);

//<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>
//ul, li*3, li>text
let fruits = ['Apple', 'Banana', 'Cherry'];
let ul = document.createElement('ul');

// for(let fruit of fruits){
//     let li = document.createElement('li');
//     let text = document.createTextNode(fruit);
//     li.appendChild(text);
//     ul.appendChild(li);
// }

// let li = document.createElement('li');
// let text = document.createTextNode('Apple');
// li.appendChild(text);
// ul.appendChild(li);

// li = document.createElement('li');
// text = document.createTextNode('Banana');
// li.appendChild(text);
// ul.appendChild(li);

// li = document.createElement('li');
// text = document.createTextNode('Cherry');
// li.appendChild(text);
// ul.appendChild(li);

fruits.forEach(callBackFnc);

function callBackFnc(item) {
    let li = document.createElement('li');
    let text = document.createTextNode(item);
    li.appendChild(text);
    ul.appendChild(li);
}
console.log(ul);

document.getElementById('bdy').appendChild(ul);

let delBtn = document.getElementById('delBtn');
delBtn.onclick = function () {
    let sname = document.getElementById('sname').value;
    let list = document.querySelectorAll('#nameList>li');
    for (let i = 0; i<list.length; i++){
        if (list[i].innerText == sname) {
            list[i].remove();
            break;
        }
    }
}

//이벤트 등록
//이벤트 기능 : 사용자의 입력값 -> <li>입력값</li>
//ul 태그 찾기 ul 하위에 붙여넣기 

let addBtn = document.getElementById('addBtn');
addBtn.onclick = function(){
    let sname = document.getElementById('sname').value;// input 타입을 sname 이라는 변수에 넣어서 value라는 속성을 가지게 하고
    let li = document.createElement('li');
    let text = document.createTextNode(sname);
    li.appendChild(text);
    document.getElementById('nameList').appendChild(li);//ul 태그 찾아서 ul태그하위에 붙여넣는 코드

    document.getElementById('sname').value="";
    document.getElementById('sname').focus();
}