//employee.js
let data = '';
const titles = ['EmpId', 'fName', 'lName', 'HireDAte', 'Email', 'Job', 'Salary'];
const fields = ['employeeId', 'firstName', 'lastName', 'hireDate', 'email', 'jobId', 'salary'];
//thead 영역
function makeHead() {

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
	titles.forEach(function(field) {
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
	data.forEach(function(obj) {
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
	for (let field of fields) {
		let td = document.createElement('td');
		let text = document.createTextNode(item[field]);
		td.appendChild(text);
		tr.appendChild(td);
	}
	return tr;
}

//즉시 실행함수//크롬에 보여주는 코드
(function drawTable() {
	//Ajax 호출	
	let xhtp = new XMLHttpRequest();
	xhtp.onreadystatechange = function() {
		if (xhtp.readyState == 4 && xhtp.status == 200) {
			console.log('readystate : ' + xhtp.readyState);
			console.log('status : ' + xhtp.status);
			data = JSON.parse(xhtp.responseText)
			console.log(data);

			let tbl = document.createElement('table');
			tbl.setAttribute('border', '1');
			tbl.appendChild(makeHead());
			tbl.appendChild(makeBody());

			document.getElementById('list').appendChild(tbl);

		}
	}
	xhtp.open('get', '../EmpList.json');
	xhtp.send();



}()); //()은 function을 실행하겠다라는 의미


//등록버튼 이벤트
let addBtn = document.querySelector('#btn>button');
addBtn.addEventListener('click', addcallBack);

function addcallBack() {
	let eid = document.querySelector('input[name="eid"]').value;
	let fname = document.querySelector('input[name="fname"]').value;
	let lname = document.querySelector('input[name="lname"]').value;
	let email = document.querySelector('input[name="email"]').value;
	let hireDate = document.querySelector('input[name="hire_date"]').value;
	let salary = document.querySelector('input[name="salary"]').value;

	if (eid == "" || lname == "" || hireDate == "" || email == "") {
		window.alert('필수값을 입력하세요');
		return;
	}
 
	const xhtp = new XMLHttpRequest();
	xhtp.onload = function() {
		let result = JSON.parse(xhtp.responseText);//JSON-> javascript object 변경.
		console.log(result);
		let tr = makeTr(result);
		document.querySelector('#list>table>tbody').appendChild(tr);

	}
	xhtp.open('post', '../InsertEmployeeServlet');
	xhtp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhtp.send(`employee_id=${eid}&first_name=${fname}&last_name=${lname}&email=${email}&hire_date=${hireDate}&salary=${salary}`);

	//let obj = {
	//name: name,
	//phone: phone,
	//addr: addr,
	//email: email
	//}

	let inputs = document.getElementsByTagName('input');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].value = '';
	}

}

//삭제버튼 이벤트 등록

let delBtn = document.querySelector('#btn>button:nth-child(2)');
delBtn.addEventListener('click', delcallBack);

function delcallBack() {
	let chks = document.querySelectorAll('tbody input[type="checkbox"]');
	for (let i = 0; i < chks.length; i++) {
		if (chks[i].checked == true) {
			console.log(chks[i].parentNode.nextSibling.innerText);
			let del_id = chks[i].parentNode.nextSibling.innerText;
			//ajax 호출(삭제 서블릿 호출 => 화면에서 삭제);
			const xhtp = new XMLHttpRequest();
			xhtp.onload = function() {
				//서버호출 결과 값을 받아오면 실행하는 부분
				console.log(xhtp.responseText);
				let result = JSON.parse(xhtp.responseText);
				if (result.retCode == 'Success') {
					chks[i].parentNode.parentNode.remove();
				} else {
					window.alert(result.retVal);
				}
			}
			//화면삭제

			xhtp.open('post', '../DelEmpServlet');
			xhtp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhtp.send(`emp_id=${del_id}`);
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

