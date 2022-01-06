let datas = `[{"id":1,"first_name":"Erinn","last_name":"Hutchinson","email":"ehutchinson0@networkadvertising.org","gender":"Male"},
{"id":2,"first_name":"Erv","last_name":"Clucas","email":"eclucas1@angelfire.com","gender":"Male"},
{"id":3,"first_name":"Paten","last_name":"Sackler","email":"psackler2@dagondesign.com","gender":"Female"},
{"id":4,"first_name":"Demott","last_name":"Dellit","email":"ddellit3@github.io","gender":"Male"},
{"id":5,"first_name":"Roana","last_name":"Hellmer","email":"rhellmer4@weibo.com","gender":"Female"},
{"id":6,"first_name":"Silvester","last_name":"Ellerton","email":"sellerton5@tinyurl.com","gender":"Female"},
{"id":7,"first_name":"Timoteo","last_name":"Cluely","email":"tcluely6@flavors.me","gender":"Male"},
{"id":8,"first_name":"Sarajane","last_name":"Beachamp","email":"sbeachamp7@dion.ne.jp","gender":"Male"},
{"id":9,"first_name":"Lissie","last_name":"Houseman","email":"lhouseman8@noaa.gov","gender":"Male"},
{"id":10,"first_name":"Malinda","last_name":"Postlewhite","email":"mpostlewhite9@cnet.com","gender":"Female"},
{"id":11,"first_name":"Galvan","last_name":"Clarricoates","email":"gclarricoatesa@wix.com","gender":"Male"},
{"id":12,"first_name":"Lucias","last_name":"Delaprelle","email":"ldelaprelleb@baidu.com","gender":"Female"},
{"id":13,"first_name":"Candie","last_name":"Rault","email":"craultc@edublogs.org","gender":"Male"},
{"id":14,"first_name":"Vladamir","last_name":"Glassborow","email":"vglassborowd@netlog.com","gender":"Female"},
{"id":15,"first_name":"Harriette","last_name":"Hanshawe","email":"hhanshawee@cisco.com","gender":"Female"}]`


let employees = JSON.parse(datas);
console.log(employees);

document.write(`<table border="1">`);
document.write(`<thead><tr><th>ID</th><th>Name></th><th>Email</th><th>Gender</th></tr></thead>`);
document.write(`<tbody>`);
employees.forEach((item, ind) => {
    console.log(item.id, item.first_name, item['last_name'], item['gender']);
    document.write(`<tr><td>${item.id}</td><td>${item.first_name}-${item.last_name}</td><td>${item.email}</td><td>${item.gender}</td></tr>`);

});
document.write(`</tbody>`);
document.write(`</table border="1">`);


let firstNames =[];

//employees => 배열값중 first_name =>
employees.forEach(function(item,ind) {
    //배열.push(값;)
    firstNames.push(item.first_name);
});
console.log(firstNames);