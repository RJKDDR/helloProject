//sample1.js

var memNum = window.prompt('입장객은 몇명?');
var colNum = window.prompt('한줄에 앉을 사람?');
var cutNum = Math.ceil(memNum/colNum);
var count =0
//  var rowNum = Math.ceol(memNum/colNum); //(올림)
//56명, 5명 씩
// for (var i = 1; i <= memNum; i++) {
//     document.write(`<span> 좌석 ${i}</span>`);
//     if (i % colNum == 0) {
//         document.write('<br>');
//     }
// }
for( var i=1;i<=rowNum;i++){
    for(var j =1; j<=colNum; j++){
        document.write(`<span>좌석${i}-${j}</span>`);
        if(count==memNum){
            break;
        }
    }
    document.write('<br>');
}
document.write();//교수님 방법
for (var i = 1; i <= cutNum; i++) {
    
    for (var j = 1; j <= colNum; j++) {
        console.log(`좌석${i}-${j}`);

        document.write(`<span>좌석${i}-${j}</span>`);
        count++
        if(memNum==count){
            break;
        }
    }
    document.write('<br>');
}
document.write();
// var i,j;
// document.write("<table border='1'>")
//  for(i=0; i<rowNum; i++){
//      document.write("<tr>");
//      for(j=1; j= colNum; j++){
//          seatNo = i * colNum + j;
//          if(seatNo > memNum) break;
//          document.write("<td> 좌석" + setNo+ "</td>");
//      }
//      document.write("<tr>")
//  }
//  document.write("</table>")