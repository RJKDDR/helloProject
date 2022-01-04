//basic.js
'use strict'
var member1 = {
    memberId:1001,
    memberName : '민윤기',
    memberPhone : '010-1993-0309',
    memberAddr: 'Daegu 100'
}
var member2 = {
    memberId:1002,
    memberName : '김석진',
    memberPhone : '010-1992-1204',
    memberAddr: 'Daegu 200'
}
var member3 = {
    memberId:1003,
    memberName : '김남준',
    memberPhone : '010-1994-0901',
    memberAddr: 'Daegu 300'
}
var member4 = {
    memberId:1004,
    memberName : '정호석',
    memberPhone : '010-1994-0226',
    memberAddr: 'Daegu 400'
}
var members = [member1, member2, member3, member4];

var str='';
str += '<table id="tdl", border="1">';
str +='<thead><tr>';
for(var field in member1){
    str += `<th>${field}</th>`;
}
str +='</tr></thead>';
str +='<tbody>';
// for(String str : strings){}
// for(var member of members){
//     str+='<tr>';
//     for(var field in member){
//         str+=`<td>${member[field]}</td>`;
//     }
//     str+='</tr>';
// }
// str+='</tbody></table>';
for(var i=0; i<members.length; i++){
    console.log(`${i+1}번째 ID=> ${members[i].memberId}`);
    console.log(`${i+1}번째 name=> ${members[i].memberName}`);
    console.log(`${i+1}번째 Phone=> ${members[i].memberPhone}`);
    console.log(`${i+1}번째 Addr=> ${members[i].memberAddr}`);
    str +='<tr>';
    for(var field in member1){
        str +=`<td>${members[i][field]}</td>`;
    }
str += '</tr>';
}
str += '</tboby></table>';
document.write(str);


//string, number,boolean, array, object
//null, undefined 