console.log('Jeu démarré');

let box = document.querySelector('.box');
console.log(box);
let click = 0;
let scroreElement = document.querySelector('#score');

let chrono = 30;
let chronoElement = document.querySelector('#chrono');

let highscore = localStorage.getItem("highscore");
let highscoreElement = document.querySelector('#highscore');

box.addEventListener("click", () => {
    console.log('click sur la box !');
    click += 1;
    scroreElement.innerHTML = "Nbr clicks: "+click;
    chronoElement.innerHTML = chrono;
        highscoreElement.innerHTML = "Meuilleur score:"+highscore;
    
    
    let top = Math.floor(Math.random() * window.innerHeight);
    let left = Math.floor(Math.random() * window.innerWidth);

    // box.style.top = top + "px";
    box.style.top = `${top}px`;
    // box.style.backgroundColor = "red";
    box.style.left = `${left}px`;
});

setInterval(() => {
    console.log("timer");
    if (chrono != 0 && click!=0)  {
        chrono--;
        chronoElement.innerHTML = "Chrono: "+chrono;
    }

    console.log("highscore",highscore);
    if (click > highscore){
        localStorage.setItem("highscore", click);
        highscore = click;
        highscoreElement.innerHTML = highscore;
    }

}, 1000)
/*if (chrono == 0) {
        clearInterval()
    }*/

   
    
      
      