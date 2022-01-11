const data = [{
    name: '김남준',
    phone: '010-1994-0912',
    addr: '서울 강남 100번지',
    email: 'rm@email.com'
}, {
    name: '김석진',
    phone: '010-1992-1204',
    addr: '서울 강남 100번지',
    email: 'jin@email.com'
}, {
    name: '민윤기',
    phone: '010-1993-0309',
    addr: '서울 강남 100번지',
    email: 'suga@email.com'
}];
 
function makeHead() {
    const fields = ['Name', 'Phone', 'Addr', 'Email'];
    let thd = document.createElement('thead');
    let tr = document.createElement('tr');
    //체크박스
    let th = document.createElement('th');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', allCheckFnc);
    th.appendChild(checkbox);
    tr.appendChild(th);
    //필드영역.
    fields.forEach(function (field) {
        let th = document.createElement('th');
        let text = document.createTextNode(field);
        th.appendChild(text);
        tr.appendChild(th);
    });


    thd.appendChild(tr);

    return thd;
}

function allCheckFnc() {
    //this => 이벤트를 받는대상(input)
    // console.log(this.checked);
    //tboby 쪽 checkbox 찾아서 checked==true;    
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) {
        chks[i].checked = this.checked;
    }
}
//tbody 영역.
function makeBody() {
    let tbd = document.createElement('tbody');
    data.forEach(function (obj) {
        tbd.appendChild(makeTr(obj));
        // = let tr = makerTr(obj);
        // tbd.appendChild(tr);(38번라인이 39,40번 라인 한줄로 표현한거)

        //makeTr로 이동함
        // let tr = document.createElement('tr');
        // for (let field in obj) {
        //     let td = document.createElement('td');
        //     let text = document.createTextNode(obj[field]);
        //     td.appendChild(text);
        //     tr.appendChild(td);        
        // tbd.appendChild(tr);
    });
    return tbd;
}
//tr 생성.
function makeTr(item) {
    let tr = document.createElement('tr');
    //체크박스
    let td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.appendChild(checkbox);
    tr.appendChild(td);
    //데이터영역
    for (let field in item) {
        let td = document.createElement('td');
        let text = document.createTextNode(item[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    return tr;
}

//즉시 실행함수//크롬에 보여주는 코드
(function drawTable() {
    let tbl = document.createElement('table');
    tbl.setAttribute('border', '1');
    tbl.appendChild(makeHead());
    tbl.appendChild(makeBody());

    document.getElementById('list').appendChild(tbl);
}()); //()은 function을 실행하겠다라는 의미


//등록버튼 이벤트
let addBtn = document.querySelector('#btn>button');
addBtn.addEventListener('click', addcallBack);

function addcallBack() {
    let name = document.querySelector('input[name="name"]').value;
    let phone = document.querySelector('input[name="phone"]').value;
    let addr = document.querySelector('input[name="addr"]').value;
    let email = document.querySelector('input[name="email"]').value;

    if (name == "" || phone == "" || addr == "" || email == "") {
        window.alert('필수값을 입력하세요');
        return;
    }

    let obj = {
        name: name,
        phone: phone,
        addr: addr,
        email: email
    }
    let tr = makeTr(obj);
    document.querySelector('#list>table>tbody').appendChild(tr);

    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    info();
}

//삭제버튼 이벤트 등록

let delBtn = document.querySelector('#btn>button:nth-child(2)');
delBtn.addEventListener('click', delcallBack);

function delcallBack() {
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) {
        if (chks[i].checked == true) {
            chks[i].parentNode.parentNode.remove();
        }
    }


}

//리스트 ->입력화면에 보여주기 

let names = document.querySelectorAll('table tbody tr td:nth-child(2)');
console.log(names)
for (let i = 0; i < names.length; i++) {
    names[i].addEventListener('click', showInfo);
}

function showInfo() {
    //this 이벤트를 받는 대상(td)

    let parent = this.parentNode;
    console.log(parent.childNodes[2].innerText);

    document.querySelector('input[name="name"]').value = parent.childNodes[1].innerText;
    document.querySelector('input[name="phone"]').value = parent.childNodes[2].innerText;
    document.querySelector('input[name="addr"]').value = parent.childNodes[3].innerText;
    document.querySelector('input[name="email"]').value = parent.childNodes[4].innerText;

}

function info() {
    let names = document.querySelectorAll('table tbody tr td:nth-child(2)');
    for (let i = 0; i < names.length; i++) {
        names[i].addEventListener('click', showInfo);
    }

    function showInfo() {
        //this 이벤트를 받는 대상(td)

        let parent = this.parentNode;
        console.log(parent.childNodes[2].innerText);

        document.querySelector('input[name="name"]').value = parent.childNodes[1].innerText;
        document.querySelector('input[name="phone"]').value = parent.childNodes[2].innerText;
        document.querySelector('input[name="addr"]').value = parent.childNodes[3].innerText;
        document.querySelector('input[name="email"]').value = parent.childNodes[4].innerText;

    }
}