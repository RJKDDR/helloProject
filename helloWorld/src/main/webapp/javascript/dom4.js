const titles = ["이름","학생번호", "점수"];
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

let parent = document.getElementById("show");

//table > thead > tbody

let tbl = document.createElement('table');
tbl.setAttribute('border', '1');
parent.appendChild(tbl);


/* <thead></thead> */
let thd = document.createElement('thead');
let tr = document.createElement('tr');
thd.appendChild(tr);
titles.forEach(function (item) {
    let th = document.createElement('th');
    let text = document.createTextNode(item);
    th.appendChild(text);
    tr.appendChild(th);
});
//버튼
let th = document.createElement('th');
let text = document.createTextNode('삭제');
th.appendChild(text);
tr.appendChild(th);


tbl.appendChild(thd);

//<tbody></tbody>

let tbd = document.createElement('tbody');
students.forEach(function (obj) {
    let tr = document.createElement('tr');
    tr.onmouseover = function(e){
        tr.style.backgroundColor = 'blue';
    }
    tr.onmouseout = function(e){
        e.target.style.background = none;
    }

    for (let field in obj) {
        //field 갯수만큼 반복해서 생성
        let td = document.createElement('td');
        let text = document.createTextNode(obj[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    //<td>이름</td>
    // td = document.createElement('td');
    // text = document.createTextNode(obj.fullName]);
    // td.appendChild(text);
    // tr.appendChild(td);
    // //<td>학생번호</td>
    // td = document.createElement('td');
    // text = document.createTextNode(obj.studNo);
    // td.appendChild(text);
    // tr.appendChild(td);
    // //<td>점수</td>
    // td = document.createElement('td');
    // text = document.createTextNode(obj.score);
    // td.appendChild(text);
    // tr.appendChild(td);

    //삭제버튼
  let  td = document.createElement('td');
  let btn = document.createElement('button');
  btn.onclick = function(e){
      console.log(e.target);
        e.target.parentNode.parentNode.remove();
        };
    let text = document.createTextNode('삭제');
    btn.appendChild(text);
    td.appendChild(btn);
    tr.appendChild(td);

    tbd.appendChild(tr);

});
tbl.appendChild(tbd);