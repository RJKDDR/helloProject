//dom3.js
//dom 생성
let body = document.getElementsByTagName('body')[0];
body.setAttribute('id', 'bdy');
let div = document.createElement('div');
div.setAttribute('id', 'show');
body.appendChild(div);

let input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('value', 'test');
input.setAttribute('id', 'sname');
body.appendChild(input);

let btn1 = document.createElement('button');
btn1.setAttribute('id','addBtn');
btn1.innerText = '추가';
body.appendChild(btn1);

let btn2 = document.createElement('button');
btn2.setAttribute('id','delBtn');
btn2.innerText = '삭제';
body.appendChild(btn2);


let sname = ['김남준', '김석진', '민윤기'];
let ul = document.createElement('ul');
ul.setAttribute('id', 'nameList');
body.appendChild(ul);


for(let name of sname){
    let li = document.createElement('li');
    let text = document.createTextNode(name);
    ul.appendChild(li);
    li.appendChild(text);
}


btn2.onclick = function() {
    console.log('delBtn');
    let sname = document.getElementById('sname').value;
    let list = document.querySelectorAll('#nameList>li');
    for(let i = 0; i<list.length; i++){
        if(list[i].innerText == sname){
            list[i].remove();
            break;
        }
    }
}

btn1.onclick = function(){
    let sname = document.getElementById('sname').value;
    let li = document.createElement('li');
    li.innerText = sname;
    let ul = document.querySelector('#nameList');
    ul.appendChild(li);
}