//array1.js


let delBtn = document.getElementById('delBtn')
delBtn.onclick=function(){
    let sname = document.getElementById('sname').value;
if(!sname) {
    alert('값을 입력하세요!!');
    return;
}
   let list = document.querySelectorAll('ul>li');
   console.log(list);
   for(let i =0; i<list.length; i++){
       if(list[i].innerText == sname){
           list[i].style.display = 'none';
       }
   }
}


const numAry = [21, 17, 33, 72, 88];

let sum = 0;
numAry.forEach(function (item, idx, ary) {
    // if(idx %2 ==0)
    sum += item;
});
console.log(`합계 : ${sum}`);

const names = ['김남준', '김석진', '민윤기', '정호석', '박지민'];
console.log(names);;
// for(let i = 0; i < names.length; i++){ 
    const sname = window.prompt('삭제할 이름임력>> ');
    for (let i=0; i<names.length; i++) { 
   
//     names.push(salsname);=>추가할 이름 임력코드
if(names[i] == sname){
    names.splice(i,1);
}
}
 console.log(names);

 //names.splice(1,1); //원하는 위치의 값을 없애줌 만약 뒤에 'ㅐㅐㅐ','ㅇㅇㅇ' 붙이면  'ㅐㅐㅐ','ㅇㅇㅇ'으로 바뀜
//console.log(names);

// let list = document.querySelectorAll('ul:nth-of-type(1)>li');
// console.log(list);
// list.forEach(function (item, idx, ary) {
//    console.log(item, idx, ary);//item개별 하나하나 개별값 idx 개별값 순...서? ary는 전체이야기하는거
//     // console.log(item, item.innerHTML);
//     if(idx % 2 == 0) //idx 순서에 따라 설정
//     item.innerHTML='<h3>hello</h3>';
// });