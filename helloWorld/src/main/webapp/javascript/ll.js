// var currentYear = 2021;
// var birthday;
// var age;

// birthday = prompt("태어난 연도를 입력하세요,(YYYY)","");
// age = currentYear - birthday + 1;
// document.write(currentYear + "년 현재<br>");
// document.write(birthday + "년에 태어난 사람의 나이는 "+age +"세 입니다.");

// var numberOne = prompt("50 미만인 숫자를 입력하세요");
// var numberTwo = prompt("50 미만인 숫자를 입력하세요");
// if(numberOne < 50 && numberTwo <50)
// alert("숫자 2개 중에서 모두 50미만입니다.");
// else
// alert("조건에 맞지 않는 숫자가 있습니다.");

// var memNum = prompt("입장객은 몇명인가요?");
// var colNum = prompt("한줄에 몇명씩 앉습니까?");

// if(memNum % colNum === 0)
// rowNum = parseInt(memNum / colNum);
// else
// rowNum = parseInt(memNum / colNum) + 1;

// document.write("모두" + rowNum + "개의 줄이 필요합니다")


//구구단


var i , j;
for(i = 1; i<=9; i++){
    document.write("<div>");
    document.write("<h3>" + i + "단</h3>");
    for( j = 1; j <= 9; j++){
        document.write(i + " X " + j + " = " + i*j + "<br>");
    }
    document.write("</div>");
}