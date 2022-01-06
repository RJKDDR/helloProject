//event1.js
let str =`<table border="1">
<thead>
    <tr>
        <th>이름</th>
        <th>전화번호</th>
        <th>주소</th>
        <th>삭제</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>김남준</td>
        <td>053-0904-1994</td>
        <td>대구 중구 100번지</td>
        <td><button>삭제</button></td>
    </tr>
    <tr>
        <td >정호석</td>
        <td>053-0218-1994</td>
        <td>대구 중구 100번지</td>
        <td><button>삭제</button></td>
    </tr>
    <tr>
        <td>민윤기</td>
        <td>053-0309-1993</td>
        <td>대구 중구 100번지</td>
        <td><button>삭제</button></td>
    </tr>
</tbody>`
let names = document.querySelectorAll('table>tbody>tr>td:nth-child(1)');
console.log(names);

for (let i = 0; i < names.length; i++) {
    names[i].onclick = function (e) {
        console.log(e.target.innerText);
        let text = e.target.innerText;
        alert(text + '입니다!')
    }
}

let rows = document.querySelectorAll('tbody>tr');
for (let i = 0; i < rows.length; i++) {
    rows[i].onmouseover = function (e) {
        console.log(e.target.parentNode);
        e.target.parentNode.style.backgroundColor = 'yellow';
        // e.target.parentNode.style.display='none';
    }
    // <div style='background-color :yellow;'></div> 
    rows[i].onmouseout = function (e) {
        e.target.parentNode.style.backgroundColor = null;
    }
}
//버튼 누르면 삭제하는 코드(한줄씩)
let btns = document.querySelectorAll('tbody>tr>td>button');
for(let i = 0; i<btns.length; i++){
    // btns[i].onclick = deleteFnc;
    btns[i].addEventListener('click',deleteFnc);
}
function deleteFnc(e){
e.target.parentNode.parentNode.remove();
}