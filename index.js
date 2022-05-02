// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit", matchSubmit);
var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];



function matchSubmit() {
    event.preventDefault();

    var matchObj = {
        matchNum: document.querySelector("#matchNum").value,
        matchA: document.querySelector("#teamA").value,
        matchB: document.querySelector("#teamB").value,
        matchDate: document.querySelector("#date").value,
        matchVenue: document.querySelector("#venue").value,

    };
    matchArr.push(matchObj)
    console.log(matchArr);
    localStorage.setItem("schedule", JSON.stringify(matchArr));

    window.location.href = "matches.html";


}