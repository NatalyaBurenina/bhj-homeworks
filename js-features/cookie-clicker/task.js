// Задача 2.

let cookieID = document.getElementById ('cookie');
let clicker__counterID = document.getElementById('clicker__counter'); 
let counter = 0; 
 
cookieID.addEventListener('click', function(){ 
   counter++;
   clicker__counterID.textContent = counter;  
   cookieID.width = counter % 2 == 0 ? 200 : 300;
}); 