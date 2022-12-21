//===================================================================================================================================================================================================                   Script for the HOME SCORE ===================================================================================================================================================================================================

let displayHomeCount = 0

let homeCount = document.getElementById("home-score-display")

function homeBtnAdd1() {
    displayHomeCount += 1
    homeCount.textContent = displayHomeCount
}
function homeBtnAdd2() {
    displayHomeCount += 2
    homeCount.textContent = displayHomeCount
}
function homeBtnAdd3() {
    displayHomeCount += 3
    homeCount.textContent = displayHomeCount
}





//===================================================================================================================================================================================================                   Script for the GUEST SCORE ===================================================================================================================================================================================================

let displayGuestCount = 0

let guestCount = document.getElementById("guest-score-display")

function guestBtnAdd1() {
    displayGuestCount += 1
    guestCount.textContent = displayGuestCount
}
function guestBtnAdd2() {
    displayGuestCount += 2
    guestCount.textContent = displayGuestCount
}
function guestBtnAdd3() {
    displayGuestCount += 3
    guestCount.textContent = displayGuestCount
}

//===================================================================================================================================================================================================                   Script for the NEW GAME ===================================================================================================================================================================================================

function newGame() {
  
    homeCount.textContent = 0
    guestCount.textContent = 0
    displayHomeCount = 0
    displayGuestCount = 0
}

