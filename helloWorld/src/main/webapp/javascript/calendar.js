//calendar.js

var year = 2022;
var month = 3;

function makeCal(year, month) {

    var today = new Date(year, month - 1, 1);
    var lastDay = new Date(year, month, 0);
    //교수님 버전
    var firstDayOfMonth = today.getDay();
    var lastDateOfMonth = lastDay.getDate();
    var days = ['Sun', 'Mon', 'Tue', 'Wen', 'Tur', 'Fri', 'Sat'];

    document.write(`<h3> ${today.getFullYear()}년 ${today.getMonth()+1}월</h3>`);

    for (var day of days) {
        document.write('<span>' + day + '</span>');
    }
    document.write('<br>');
    //빈공란
    for (var n = 0; n < firstDayOfMonth; n++) {
        document.write('<span></span>'); //띄어쓰기도 값으로봄!!!
    }
    //날짜출력
    for (var i = 1; i <= lastDateOfMonth; i++) {   
        if ((i + firstDayOfMonth) % 7 == 1) {
            document.write('<span class="sunday">' + i + '</span>');
        }else if((i + firstDayOfMonth) % 7 == 0) {
            document.write('<span class="sat">' + i + '</span>');
        } else {
            document.write('<span>' + i + '</span>');
        }
        if ((i + firstDayOfMonth) % 7 == 0) {
            document.write('<br>');
        }
    }
}