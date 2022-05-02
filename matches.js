// write js code here corresponding to matches.html

var matchArr = JSON.parse(localStorage.getItem("schedule"));

displayData(matchArr);


function displayData(matchArr) {
    console.log(matchArr);
}
matchArr.forEach(function(elem) {
    var tr = document.createElement("tr");

    var th1 = document.createElement("th");
    th1.innerText = elem.matchNumber;
    var th2 = document.createElement("th");
    th1.innerText = elem.matchA;
    var th3 = document.createElement("th");
    th1.innerText = elem.matchB;
    var th4 = document.createElement("th");
    th1.innerText = elem.matchDate;
    var th5 = document.createElement("th");
    th1.innerText = elem.matchVenue;
    var th6 = document.createElement("th");
    th1.innerText = elem.favourites;

    tr.append(th1, th2, th3, th4, th5, th6)
    document.querySelector("table").append(tr);



})