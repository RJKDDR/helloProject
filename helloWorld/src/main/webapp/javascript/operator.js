//operator.js
// var iVal = window.prompt("값을 입력");
var iVal =0;
console.log(iVal);
var numAry = [3, 9, 20, 14, 8, 22];

var sum = 0;
for (var num of numAry) {
    console.log(num);
    if (num % 2 == 0) { //2로 나누기 했을때 0으로 되는건 짝수뿐이기 때문에 짝수만 더하겠다는 뜻
        sum += num;
    }
    if (num === parseInt(iVal)){//parseInt(iVal) 전에 그냥 iVal 넣었었음//iVal값을 강제로 int타입으로 강제로 변환시켜야(===과 ==)값이 같아짐
        break;
    }
}
console.log(`합계는 ${sum}`);
 
console.log(3 + '5' + (3 + 4));

var sum_2=0;
var sum_3=0;
var sum_23=0;
for(var i=1; i<=20; i++){

    if(i % 6 == 0){ //if(i%2==0 && i%3==0)
        sum_23 += i;
    } else if(i % 3 == 0){
        sum_3 += i;
    } else if(i %  2== 0){
        sum_2 +=i;
    }
}
console.log(`2의 배수 합계 : ${sum_2}`);
console.log(`3의 배수 합계 : ${sum_3}`);
console.log(`2와 3의 배수 합계 : ${sum_23}`);