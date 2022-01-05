//funtion4.js


var students = [{
    studentName:'민윤기',
    score:80,
    birth:'1993-03-09',
    phone:'010-1993-0309',
    gender:'남자'
},{
    studentName:'김석진',
    score:75,
    birth:'1992-12-04',
    phone:'010-1992-1204',
    gender:'남자'
},{
    studentName:'김남준',
    score:95,
    birth:'1994-09-12',
    phone:'010-1994-0912',
    gender:'남자'
}];
function makeTable(ary){
    var str ='';
    str += `<table border='1'>`;
    str += `<thead><tr><th>이름</th><th>점수</th><th>생년월일</th><th>연락처</th><th>성별</th></tr></thead>`;    
    str += `<tbody>`;
    for(var student of ary){
        str+='<tr>';
        //td 생성.
        for(var field in student){
            str+=`<td>${student[field]}</td>`
        }
        // str+=`<td>${student.studentName}</td>`;
        // str+=`<td>${student.score}</td>`;
        // str+=`<td>${student.birth}</td>`;
        // str+=`<td>${student.phone}</td>`;
        str+='</tr>';
    }
    str+=`</tbody>`;
    str +=`</table>`;
    return str;
}

// document.write(makeTable(students));
makeCal(2022,5);
makeCal(2021,12);