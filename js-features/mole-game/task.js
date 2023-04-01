// Задача 3.

const getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById("dead")
const lost = document.getElementById("lost")

for(i = 1; i <= 9; i++){
    const play = document.getElementById(`hole${i}`)    
    play.onclick = function(){
        if(play.className.includes('hole_has-mole')){
            dead.textContent = +dead.textContent + 1
        } else {
            lost.textContent = +lost.textContent + 1
        }
        if(+lost.textContent === 5){
            alert("Вы проиграли!")
            dead.textContent = 0
            lost.textContent = 0
        } else if(+dead.textContent === 10) {
            alert("Победа!")
            dead.textContent = 0
            lost.textContent = 0
        }
    }     
}