let homeScore = document.getElementById("homeScore")
let gestScore = document.getElementById("guestScore")

let homeScoreValue = 0;
let guestScoreValue = 0;

homeScore.textContent = homeScoreValue;
guestScore.textContent = guestScoreValue;

function add1pointsHome(){
    homeScoreValue += 1;
    homeScore.textContent = homeScoreValue;
}

function add2pointsHome(){
    homeScoreValue += 2;
    homeScore.textContent = homeScoreValue;
}

function add3pointsHome(){
    homeScoreValue += 3;
    homeScore.textContent = homeScoreValue;
}

function add1pointsGuest(){
    guestScoreValue += 1;
    guestScore.textContent = guestScoreValue;
}

function add2pointsGuest(){
    guestScoreValue += 2;
    guestScore.textContent = guestScoreValue;
}

function add3pointsGuest(){
    guestScoreValue += 3;
    guestScore.textContent = guestScoreValue;
}