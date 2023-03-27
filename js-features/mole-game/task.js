// Задача 3.

let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let victory = parseInt(deadMole.textContent);
let defeat = parseInt(lostMole.textContent);

function checkGame(deadMole, lostMole) {
    console.log(deadMole, lostMole);
    if (deadMole === 10) {
        alert("Вы победили!");
        location.reload();
    } else if (lostMole === 5) {
        alert("Вы приграли!");
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            victory += 1;
            deadMole.textContent = victory;
        } else {
            defeat += 1;
            lostMole.textContent = defeat;
        };
        checkGame(victory, defeat);
    };
};


